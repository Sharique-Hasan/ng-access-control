
(function(){
  'use strict';

  var module = angular.module( "ng-access-control", [] );
  module.factory('ngAcl', ngAcl);
  var service = {};
  let _permissions = [];
  let _userRoles = [];
  let _currentRole;
  ngAcl.$inject = [];

  function ngAcl(){

    service = {
      populatePermission: (permission) => {
        _permissions = _.compact(_permissions.concat(permission));
      },
      getPermission: () => {
        return _permissions;
      },
      extractPermission: _objectExtractor,
      getUserCurrentRole: () => {
        return _currentRole;
      },
      populateUserRoles: (roles) => {
        _userRoles = _.compact(_userRoles.concat(roles));
      },
      setCurrentRole: (role) => {
        let incomingRoleIsInUserRoles = _.includes(_userRoles, role);
        if(!incomingRoleIsInUserRoles){
          throw new Error('Current role does not exist in user roles');
        }
        _currentRole = role;
      },
      getSelfOrGlobalPermission: (permission, isAuthor) => {
        let permissions = _.find(service.getPermission(), { name: _currentRole });
        let keys = _.first(permission.split('.'));
        let allowed = service.extractPermission(permissions, `permissions.${keys}`);
        return isAuthor ? allowed.__self : allowed.__global;
      },
      canUpdate: (data, mode) => {
        //let currentRole = service.getUserCurrentRole();
        //_canUpdate(data, mode, currentRole);
      }

    };

    return service;
  }

  function _objectExtractor(base, key){
    let tmpKeys = key.split('.');
    let firstKey = tmpKeys[0];
    if (!firstKey) return base;
    return _objectExtractor(base[firstKey], _.tail(tmpKeys).join('.'));
  }

  function _canUpdate(data, mode, currentRole) {
    let isAuthor = data.isAuthor;
    let updateData = _.omit(_.clone(data), 'isAuthor');
    for(var key in updateData){
      if(_.isPlainObject(updateData[key])){
        let basePlusKey = `permissions.${key}`;
        updateData[key] = _checkChildObject(basePlusKey, updateData[key], isAuthor);
      }
      //Fixme
    }
  }

  function _checkChildObject(baseKey, childObject, isAuthor) {
    let permissions = _.find(service.getPermission(), { name: _currentRole });
    for(var key in childObject){
      if(_.isPlainObject(childObject[key])){
        childObject[key] = _checkChildObject(key, childObject[key]);
      }
      else{
        let basePlusKey = `${baseKey}.${key}`;
        let allowed = service.extractPermission(permissions, basePlusKey);
        //Fixme
      }
    }
  }



})();;;(function(){

  'use strict';
  var module = angular.module('ng-access-control');
  module.directive('acl', acl);

  acl.$inject = ['ngAcl'];

  function acl(ngAcl){
    return {
      priority:1001, // compiles first
      restrict: 'A',
      scope: {
        acl: '@',
        mode: '@',
        isAuthor: '='
      },
      link: (scope, element) => {
        let tagName = element[0].tagName.toLowerCase();
        let userRole = ngAcl.getUserCurrentRole();
        let permissions = _.find(ngAcl.getPermission(), { name: userRole });
        let seekingPermission = `permissions.${scope.acl}`;
        let allowed = ngAcl.extractPermission(permissions, seekingPermission);
        let generalPermission = ngAcl.getSelfOrGlobalPermission(scope.acl, !!scope.isAuthor);
        let options = {
          mode: scope.mode,
          tagName: tagName,
          allowed: scope.isAuthor ? generalPermission : allowed,
          generalPermission: generalPermission
        };
        let decider = permissionDecider(options);
        if(decider.remove){
          element.remove();
        }
        if(!decider.remove && decider.disable){
          $(element).attr('disabled',true);
        }
      }
    };

    function permissionDecider(options) {
      let remove, disable;
      let mode = options.mode || 'READ';
      remove = !(_.pick(options.allowed, 'READ') === undefined ? options.generalPermission['READ'] : options.allowed['READ']);
      disable = !(!remove ? _.pick(options.allowed, mode) === undefined ? options.generalPermission[mode] : options.allowed[mode] : false);
      return { remove: remove, disable: disable };
    }


  }

})();