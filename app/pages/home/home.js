(function() {
    'use strict';

    function HomeCtrl($location, userService, alarms) {
        this.alarms = alarms;
        this.userService = userService; 
        this.$location = $location;
    }

    angular
        .module('tickTock')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.prototype.logout = function () {
        this.userService.logout();
        this.$location.path('/');
    };

    HomeCtrl.$inject = ['$location', 'userService', 'alarms'];

})();