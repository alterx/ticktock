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
        
        if(firebase.auth().currentUser) {
            var userId = firebase.auth().currentUser.uid;
            firebase.database().ref('/'+ collectionName +'/' + userId).once('value').then(function(snapshot) {
                var data = snapshot.val()
                /*var alarms = results.map(function(object) {
                    var obj = object.get('Alarms');
                    obj.alarm = moment(obj.alarm);
                    obj.recurring = moment.recur(obj.recurring);
                    return obj;
                });*/
                
                var ret = [];
                for(var key in data){
                    var obj = data[key];
                    obj.recurring = moment.recur(obj.recurring);
                    obj.alarm = moment(obj.alarm);
                    
                    ret.push(obj);           
                };
                
                deferred.resolve(ret);
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                deferred.resolve(error);
            });
        } else {
            deferred.resolve([]);
        }

  		return deferred.promise;
    };

    StorageService.prototype.set = function (collectionName, object) {
    	var deferred = this.$q.defer();
        
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref(collectionName + '/' + userId + '/' + object.id).set(object)
        .then(function(data) {
            deferred.resolve(data);
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            deferred.resolve(error);
        });

		return deferred.promise;
    };

    StorageService.$inject = ['$q']

})();