# ng-access-control

*Role and permission based access control for your angular applications*


<img src="https://drslash.com/wp-content/uploads/2014/12/Archive-Utility.png" width="48" height="48">&nbsp;Dependencies
----------------------------
- [angular 1.4.x+](https://github.com/angular/angular)
- [lodash 4.11.2+](https://github.com/lodash/lodash)

<img src="http://www.hostingreviewslist.com/wp-content/uploads/2013/04/code-icon-script.png" width="48" height="48">&nbsp;Installation
----------------------------

#### <img src="https://versioneye.files.wordpress.com/2014/01/bower-logo.png" width="32" height="32">&nbsp;bower

```
bower install ng-access-control --save
```

<img src="http://www.hostingreviewslist.com/wp-content/uploads/2013/04/code-icon-script.png" width="48" height="48">&nbsp;Usage
----------------------------

#####&nbsp;Permission Syntax

```js
    {
      "name": "ACCOUNTANT",
      "permissions": {
        "Contract": {
          "__self": {
            "READ": true,
            "WRITE": true,
            "UPDATE": true
          },
          "__global": {
            "READ": false,
            "WRITE": false,
            "UPDATE": true
          },
          "status": {
            "READ": false,
            "WRITE": false,
            "UPDATE": false
          },
          "job": {
            "title": {
              "READ": true,
              "UPDATE": false
            }
          }
        },
        "Employee": {
          "__self": {
            "READ": true,
            "WRITE": true,
            "UPDATE": true
          },
          "__global": {
            "READ": false,
            "WRITE": false,
            "UPDATE": true
          },
          "search": {
            "READ": true,
            "WRITE": false,
            "UPDATE": false
          }
        }
      }
    }
```

#####&nbsp;Usage in Application

```js
    app.run(['ngAcl', function (ngAcl) {
    
      // Set the ACL permission. which you'd fetch from an API or something.
      
      //populate the permission either a single object or an array in the
      //form of above syntax
      ngAcl.populatePermission(permission);
    
      ngAcl.populateUserRoles('ACCOUNTANT');

      // Attach the member role to the current user
      ngAcl.setCurrentRole('ACCOUNTANT');
    
    }]);
```

#####&nbsp;Usage in UI as a directive

Directive will take care of the show and hide of the element according to the permissions provided.

```html
    <!--For update/write purpose mention the mode-->
    <!--For read purpose no need to mention the mode-->
    <!--is-author attribute is used to tell that user is the author of the object-->
    <input acl="Employee.search" mode="UPDATE" is-author="false" type="text" ng-model="vm.searchKeyword" class="form-control" name="email" placeholder="Enter email">
```
