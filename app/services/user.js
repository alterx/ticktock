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

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            deferred.resolve({user: user, error: null});
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            deferred.resolve({user: null, error: error});
        });

        return deferred.promise;
    };

    UserService.prototype.logout = function () {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
    };

    UserService.prototype.isLogged = function () {
        var currentUser = firebase.auth().currentUser;
        return currentUser != null;
    };

    UserService.prototype.register = function (email, password) {
        var deferred = this.$q.defer();
                      
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            deferred.resolve({user : user, error: null});
        })
        .catch(function(error) {
            deferred.resolve({user : null, error: error});
        });

        return deferred.promise;
    };

})();