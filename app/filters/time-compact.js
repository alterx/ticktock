(function() {
    'use strict';

    angular.module('tickTock').filter('timeCompact', function () {
        return function(input) {
            return moment(input.toISOString()).format('hh:mm a');
        };
    });
})();