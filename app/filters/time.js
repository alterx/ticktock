(function() {
    'use strict';

    angular.module('tickTock').filter('time', function () {
        return function(input) {
            return input.format('hh:mm:ss');
        };
    });
})();