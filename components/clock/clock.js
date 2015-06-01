(function() {
    'use strict';

    angular.module('tickTock').directive('clock', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/clock/clock.html',
            controller: ClockCtrl,
            controllerAs: 'ctrl',
            bindToController: true,
            scope: {
                alarms: '='
            }
        };
    });

    function ClockCtrl($interval, alarmService, configModal, ngAudio) {
        this.interval = 1000;
        this.$interval = $interval;
        this.alarmService = alarmService;
        this.date(moment());
        this.templateUrl = 'components/clock/popover.html';
        this.configModal = configModal;
        this.configModal.setConfig(this.alarms, configModal);
        this.alarm = ngAudio.load("sounds/alarm.mp3");
        this.ringing = false;

        this.tick();
    }

    ClockCtrl.prototype.tick = function () {
        this.$interval(function() {
            this.date().add(1, 'second');
        }.bind(this), this.interval);
    };

    ClockCtrl.prototype.openModal = function () {
        this.configModal.modal.activate();
    };

    ClockCtrl.prototype.closeModal = function () {
        this.configModal.modal.deactivate();
    };

    ClockCtrl.prototype.checkAlarms = function (now) {
        for(var alarm in this.alarms) {

            var alarmObj = this.alarms[alarm];

            var alarmDate = alarmObj.alarm;
            var alarmRecurring = alarmObj.recurring;

            if (alarmObj.on && alarmRecurring.matches(alarmDate) && alarmDate.hour() === now.hour() && alarmDate.minutes() === now.minutes()) {
                console.log(alarmObj.message);
                this.ringAlarm();
            }
        }
    };

    ClockCtrl.prototype.ringAlarm = function () {
        if (!this.ringing){
            this.alarm.play();
        }
    };

    ClockCtrl.prototype.stopAlarm = function () {
        this.alarm.stop();
    };

    ClockCtrl.prototype.snooze = function (alarm) {

    };

    ClockCtrl.prototype.date = function (date) {
        if(date !== undefined) {
            this._date = date;
            this.checkAlarms(date);
        } else {
            this.checkAlarms(this._date);
            return this._date;
        }
    };

    ClockCtrl.$inject = ['$interval', 'alarmService', 'configModal', 'ngAudio']

})();