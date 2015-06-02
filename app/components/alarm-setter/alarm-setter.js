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

    function AlarmSetterCtrl($route, alarmService) {
    	this.alarmService = alarmService;
        this.$route = $route;
    }

    AlarmSetterCtrl.prototype.setAlarmWeekdays = function (valid) {
        if(!valid){
            return;
        }

     	var cal;

		// Will match any date that is on Sunday or Monday.
		cal = moment.recur().every(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]).daysOfWeek();

		this.setAlarm(cal, moment(this.alarmTime));
    };

    AlarmSetterCtrl.prototype.setAlarmWeekends = function (valid) {
     	if(!valid){
            return;
        }
        
        var cal;

		// Will match any date that is on Sunday or Monday.
		cal = moment.recur().every(["Sunday", "Saturday"]).daysOfWeek();

		this.setAlarm(cal, moment(this.alarmTime));
    };

    AlarmSetterCtrl.prototype.setAlarmCustom = function (valid, customDays) {
     	if(!valid){
            return;
        }
        
        var cal;

		// Will match any date that is on Sunday or Monday.
		cal = moment.recur().every(customDays).daysOfWeek();

		this.setAlarm(cal, moment(this.alarmTime));
    };

    AlarmSetterCtrl.prototype.setAlarm = function(cal, time) {
    	this.alarmService.setAlarm({ recurring: cal, alarm: time, message: this.alarmName, on: true}).then(function(data) {
			this.$route.reload();
		}.bind(this));
    };
    
    angular
        .module('tickTock')
        .directive('alarmSetter', AlarmSetter);

    AlarmSetterCtrl.$inject = ['$route', 'alarmService'];

})();
