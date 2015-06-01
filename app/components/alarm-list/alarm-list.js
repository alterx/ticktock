(function() {
    'use strict';

    function AlarmList () {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/alarm-list/alarm-list.html',
            controller: AlarmListCtrl,
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {
            	alarms: '='
            }
        };
        return directive;
    }

    function AlarmListCtrl() {
    }

    AlarmListCtrl.prototype.method = function () {
     
    };
    
    angular
        .module('tickTock')
        .directive('alarmList', AlarmList);

})();