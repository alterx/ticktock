(function() {
    'use strict';

    function StorageService($q) {
        this.$q = $q;
    }

    angular
        .module('tickTock')
        .service('storageService', StorageService);

  	StorageService.prototype.get = function (collectionName) {
  		var deferred = this.$q.defer();
  		var _this = this;
		var query = new Parse.Query(collectionName);

		query.equalTo("user", Parse.User.current());

		query.find({
		  success: function(results) {
		    console.log("Successfully retrieved " + results.length + " alarms.");
		    // Do something with the returned Parse.Object values

		    var alarms = results.map(function(object) {
		    	var obj = object.get('Alarms');
		    	obj.alarm = moment(obj.alarm);
             	obj.recurring = moment.recur(obj.recurring);
		    	return obj;
		    });

		    deferred.resolve(alarms);
		  },
		  error: function(error) {
		    console.log("Error: " + error.code + " " + error.message);
		    deferred.resolve(error);
		  }
		});

  		return deferred.promise;
    };

    StorageService.prototype.set = function (collectionName, object) {
    	var deferred = this.$q.defer();

    	var user = Parse.User.current();
    	var Collection = Parse.Object.extend(collectionName);

		var collection = new Collection();
		collection.set(collectionName, object);
		collection.set("user", user);

		collection.save(null, {success: function(data) {
			deferred.resolve(data);
		}, error: function() {
			console.log('error');
		}});

		return deferred.promise;
    };

    StorageService.$inject = ['$q']

})();