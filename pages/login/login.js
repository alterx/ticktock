(function() {
    'use strict';

    function LoginCtrl($location, userService) {
        this.userService = userService;
        this.$location = $location;
    }

    angular
        .module('tickTock')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.prototype.login = function (valid) {
        this.userService.login(this.usr, this.psw).then(function(data){
            if(!data.error){
                this.$location.path('/clock');
            } else {
                console.log('Unable to login', 'The data provided is incorrect.');
            }
        }.bind(this));
    };

    LoginCtrl.prototype.logout = function () {
        this.userService.logout();
        this.$location.path('/login');
    };

    LoginCtrl.prototype.register = function (valid) {
        this.userService.register(this.usr, this.psw).then(function(data){
            if(!data.error){
                this.$location.path('/clock');
            } else {
                console.log('Unable to register', 'The data provided is incorrect.');
            }
        }.bind(this));
    };
    LoginCtrl.$inject = ['$location','userService'];

})();