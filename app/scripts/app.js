(function () {
    var app = angular.module('tickTock', ['ngRoute','ui.bootstrap', 'vAccordion', 'vModal', 'ngAudio', 'firebase']);

    app.config(function ($routeProvider) {

        var LoginPromise 

        $routeProvider
            .when('/clock', {
                templateUrl: 'app/pages/home/home.html',
                controller: 'HomeCtrl as ctrl',
                resolve: {
                    alarms : function(alarmService) {
                        return alarmService.getAlarms();
                    },
                    auth: ['$q', 'userService', function($q, userService) {           
                      if (userService.isLogged()) {
                        return $q.when(userService.isLogged());
                      } else {
                        return $q.reject({ authenticated: false });
                      }
                    }]
                }
                
            })
            .when('/login', {
                templateUrl: 'app/pages/login/login.html',
                controller: 'LoginCtrl as ctrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
            
    }).run(function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
            if (eventObj.authenticated === false) {
                $location.path("/login");
            }
        });

        $rootScope.theme = 'Cold';
        
        var config = {
            apiKey: "AIzaSyDdXU1lTS1EUzV3KcK0WZVmSOSUON1RORM",
            authDomain: "ticktock-39494.firebaseapp.com",
            databaseURL: "https://ticktock-39494.firebaseio.com",
            storageBucket: "",
        };
        firebase.initializeApp(config);
    });
})();