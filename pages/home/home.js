(function() {
    'use strict';

    function HomeCtrl(userService, alarms) {
        this.alarms = alarms;
        this.userService = userService; 
        this.registrationUrl = '../components/registration/registration.html';
        console.log(alarms);
    }

    angular
        .module('tickTock')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['userService', 'alarms'];

})();