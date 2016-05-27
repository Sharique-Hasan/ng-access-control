'use strict';

;(function () {
  'use strict';

  var module = angular.module("ng-access-control", []);
  module.factory('ngAcl', ngAcl);
  var service = {};
  var _permissions = [];
  var _userRoles = [];
  var _currentRole = void 0;
  ngAcl.$inject = [];

  function ngAcl() {

    service = {
      populatePermission: function populatePermission(permission) {
        _permissions = _.compact(_permissions.concat(permission));
      },
      getPermission: function getPermission() {
        return _permissions;
      },
      extractPermission: _objectExtractor,
      getUserCurrentRole: function getUserCurrentRole() {
        return _currentRole;
      },
      populateUserRoles: function populateUserRoles(roles) {
        _userRoles = _.compact(_userRoles.concat(roles));
      },
      setCurrentRole: function setCurrentRole(role) {
        var incomingRoleIsInUserRoles = _.includes(_userRoles, role);
        if (!incomingRoleIsInUserRoles) {
          throw new Error('Current role does not exist in user roles');
        }
        _currentRole = role;
      },
      getSelfOrGlobalPermission: function getSelfOrGlobalPermission(permission, isAuthor) {
        var _permissions = _.find(service.getPermission(), { name: _currentRole });
        var keys = _.first(permission.split('.'));
        var allowed = service.extractPermission(_permissions, 'permissions.' + keys);
        return isAuthor ? allowed.__self : allowed.__global;
      },
      can: function can(resource) {
        var currentRole = service.getUserCurrentRole();
        var permission = _.find(service.getPermission(), { name: currentRole });
        return _.includes(permission.allowedResources, resource);
      }
    };

    return service;
  }

  function _objectExtractor(base, key) {
    var tmpKeys = key.split('.');
    var firstKey = tmpKeys[0];
    if (!firstKey) return base;
    return _objectExtractor(base[firstKey], _.tail(tmpKeys).join('.'));
  }

  function _canUpdate(data, mode, currentRole) {
    var isAuthor = data.isAuthor;
    var updateData = _.omit(_.clone(data), 'isAuthor');
    for (var key in updateData) {
      if (_.isPlainObject(updateData[key])) {
        var basePlusKey = '_permissions.' + key;
        updateData[key] = _checkChildObject(basePlusKey, updateData[key], isAuthor);
      }
      //Fixme
    }
  }

  function _checkChildObject(baseKey, childObject, isAuthor) {
    var _permissions = _.find(service.getPermission(), { name: _currentRole });
    for (var key in childObject) {
      if (_.isPlainObject(childObject[key])) {
        childObject[key] = _checkChildObject(key, childObject[key]);
      } else {
        var basePlusKey = baseKey + '.' + key;
        var allowed = service.extractPermission(_permissions, basePlusKey);
        //Fixme
      }
    }
  }
})();;;(function () {

  'use strict';

  var module = angular.module('ng-access-control');
  module.directive('acl', acl);

  acl.$inject = ['ngAcl'];

  function acl(ngAcl) {
    return {
      priority: 1001, // compiles first
      restrict: 'A',
      scope: {
        acl: '@',
        mode: '@',
        isAuthor: '='
      },
      link: function link(scope, element) {
        var userRole = ngAcl.getUserCurrentRole();
        var permissions = _.find(ngAcl.getPermission(), { name: userRole });
        var seekingPermission = 'permissions.' + scope.acl;
        var allowed = ngAcl.extractPermission(permissions, seekingPermission);
        var generalPermission = ngAcl.getSelfOrGlobalPermission(scope.acl, !!scope.isAuthor);
        var options = {
          mode: scope.mode,
          allowed: scope.isAuthor ? generalPermission : allowed,
          generalPermission: generalPermission
        };
        var decider = permissionDecider(options);
        if (decider.remove) {
          element.remove();
        }
        if (!decider.remove && decider.disable) {
          $(element).attr('disabled', true);
        }
      }
    };

    function permissionDecider(options) {
      var remove = void 0,
          disable = void 0;
      var mode = options.mode || 'READ';
      remove = !(_.pick(options.allowed, 'READ') === undefined ? options.generalPermission['READ'] : options.allowed['READ']);
      disable = !(!remove ? _.pick(options.allowed, mode) === undefined ? options.generalPermission[mode] : options.allowed[mode] : false);
      return { remove: remove, disable: disable };
    }
  }
})();
//# sourceMappingURL=ng-access-control.js.map
