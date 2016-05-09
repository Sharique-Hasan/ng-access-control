;(function(){

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
        console.log(scope.isAuthor, allowed, tagName);
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