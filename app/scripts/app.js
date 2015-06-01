(function () {
    var app = angular.module('tickTock', ['ngRoute','ui.bootstrap', 'vAccordion', 'vModal', 'ngAudio']);

    app.config(function ($routeProvider) {

        var LoginPromise 

        $routeProvider
            .when('/clock', {
                templateUrl: 'pages/home/home.html',
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
                templateUrl: 'pages/login/login.html',
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

        if(window.Parse) {
            Parse.initialize('CS6KFTzGObchb6uUSrzm7poITNBE4IsSqUHDGRci', 'jfw2ZJpAb08MmLhvabXFlwp5NHyDZ8LbfpLxPwi5');
        }
    });
})();