
;(function(){
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
        let _permissions = _.find(service.getPermission(), { name: _currentRole });
        let keys = _.first(permission.split('.'));
        let allowed = service.extractPermission(_permissions, `_permissions.${keys}`);
        return isAuthor ? allowed.__self : allowed.__global;
      },
      can: (resource) => {
        let currentRole = service.getUserCurrentRole();
        let permission = _.find(service.getPermission(), { name: currentRole });
        return _.includes(permission.allowedResources, resource);
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
        let basePlusKey = `_permissions.${key}`;
        updateData[key] = _checkChildObject(basePlusKey, updateData[key], isAuthor);
      }
      //Fixme
    }
  }

  function _checkChildObject(baseKey, childObject, isAuthor) {
    let _permissions = _.find(service.getPermission(), { name: _currentRole });
    for(var key in childObject){
      if(_.isPlainObject(childObject[key])){
        childObject[key] = _checkChildObject(key, childObject[key]);
      }
      else{
        let basePlusKey = `${baseKey}.${key}`;
        let allowed = service.extractPermission(_permissions, basePlusKey);
        //Fixme
      }
    }
  }

})();