(function() {
    'use strict';

    function AlarmSetter () {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/alarm-setter/alarm-setter.html',
            controller: AlarmSetterCtrl,
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {}
        };
        return directive;
    }

    function AlarmSetterCtrl(alarmService) {
    	this.alarmService = alarmService;
    }

    AlarmSetterCtrl.prototype.setAlarmWeekdays = function () {
     	var cal;

		// Will match any date that is on Sunday or Monday.
		cal = moment.recur().every(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]).daysOfWeek();

		this.setAlarm(cal, moment(this.alarmTime));
    };

    AlarmSetterCtrl.prototype.setAlarmWeekends = function () {
     	var cal;

		// Will match any date that is on Sunday or Monday.
		cal = moment.recur().every(["Sunday", "Saturday"]).daysOfWeek();

		this.setAlarm(cal, moment(this.alarmTime));
    };

    AlarmSetterCtrl.prototype.setAlarmCustom = function (customDays) {
     	var cal;

		// Will match any date that is on Sunday or Monday.
		cal = moment.recur().every(customDays).daysOfWeek();

		this.setAlarm(cal, moment(this.alarmTime));
    };

    AlarmSetterCtrl.prototype.setAlarm = function(cal, time) {
    	this.alarmService.setAlarm({ recurring: cal, alarm: time, message: this.alarmName, on: true}).then(function(data) {
			console.log(data);
		}.bind(this));
    };
    
    angular
        .module('tickTock')
        .directive('alarmSetter', AlarmSetter);

    AlarmSetterCtrl.$inject = ['alarmService'];

})();
