(function() {
    'use strict';

    function UserService($q) {
        this.$q = $q;
    }

    angular
        .module('tickTock')
        .service('userService', UserService);

    UserService.$inject = ['$q'];   

    UserService.prototype.login = function (email, password) {

        var deferred = this.$q.defer();

        Parse.User.logIn(email, password, {
          success: function(user) {
            // Do stuff after successful login.
            deferred.resolve({user: user, error: null});
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            deferred.resolve({user: user, error: error});
          }
        });

        return deferred.promise;
    };

    UserService.prototype.logout = function () {
        Parse.User.logOut();
    };

    UserService.prototype.isLogged = function () {
        var currentUser = Parse.User.current();
        return currentUser != null;
    };

    UserService.prototype.register = function (email, password) {

        var deferred = this.$q.defer(),
            user = new Parse.User();

        user.set("password", password);
        user.set("username", email);
         
        user.signUp(null, {
          success: function(user) {
            deferred.resolve({user : user, error: null});
          },
          error: function(user, error) {
            deferred.resolve({user : user, error: error});
          }
        });

        return deferred.promise;
    };

})();