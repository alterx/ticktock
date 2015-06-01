(function() {
    'use strict';

    function AlarmService($q, storageService) {
        this.$q = $q;
        this.storageService = storageService;
    }

    angular
        .module('tickTock')
        .service('alarmService', AlarmService);

    AlarmService.prototype.getAlarms = function () {
    	var deferred = this.$q.defer();

    	var alarms = this.storageService.get('Alarms').then(function(data) {
			deferred.resolve(data);
    	});
    	
    	return deferred.promise;
    };

    AlarmService.prototype.setAlarm = function (alarm) {
        var deferred = this.$q.defer();

        var alarms = this.storageService.set('Alarms', alarm).then(function(data) {
            deferred.resolve(data);
        });
        
        return deferred.promise;
    };

    AlarmService.$inject = ['$q', 'storageService']

})();