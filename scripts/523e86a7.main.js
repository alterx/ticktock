!function(){var a=angular.module("tickTock",["ngRoute","ui.bootstrap","vAccordion","vModal","ngAudio"]);a.config(["$routeProvider",function(a){a.when("/clock",{templateUrl:"app/pages/home/home.html",controller:"HomeCtrl as ctrl",resolve:{alarms:["alarmService",function(a){return a.getAlarms()}],auth:["$q","userService",function(a,b){return b.isLogged()?a.when(b.isLogged()):a.reject({authenticated:!1})}]}}).when("/login",{templateUrl:"app/pages/login/login.html",controller:"LoginCtrl as ctrl"}).otherwise({redirectTo:"/login"})}]).run(["$rootScope","$location",function(a,b){a.$on("$routeChangeError",function(a,c,d,e){e.authenticated===!1&&b.path("/login")}),a.theme="Cold",window.Parse&&Parse.initialize("CS6KFTzGObchb6uUSrzm7poITNBE4IsSqUHDGRci","jfw2ZJpAb08MmLhvabXFlwp5NHyDZ8LbfpLxPwi5")}])}(),angular.module("tickTock").run(["$templateCache",function(a){"use strict";a.put("app/components/alarm-list/alarm-list.html",'<v-accordion class="vAccordion--default">\n\n  <v-pane ng-repeat="alarm in ctrl.alarms" expanded="$first">\n    <v-pane-header>\n      <strong>{{ alarm.message }}</strong>\n    </v-pane-header>\n\n    <v-pane-content>\n        <i class="glyphicon " data-ng-class="{ \'glyphicon-ok-sign\': alarm.on, \'glyphicon-minus-sign\': !alarm.on }"></i>\n        <h1>{{ alarm.alarm | timeCompact }}</h1>\n    </v-pane-content>\n  </v-pane>\n\n</v-accordion>'),a.put("app/components/alarm-setter/alarm-setter.html",'<form name="alarmForm" class="alarm-setter">\n	<input name="description" placeholder="Description" type="text" class="description" data-ng-class="{ error: alarmForm.$submitted && alarmForm.description.$invalid }" data-ng-model="ctrl.alarmName" required />\n	<timepicker ng-model="ctrl.alarmTime" hour-step="1" minute-step="15" show-meridian="true"></timepicker>\n\n	<input type="submit" class="btn btn-primary" data-ng-click="ctrl.setAlarmWeekdays(alarmForm.$valid);" value="Weekdays"></input>\n	<input type="submit" class="btn btn-primary" data-ng-click="ctrl.setAlarmWeekends(alarmForm.$valid);" value="Weekend"></input>\n</form>'),a.put("app/components/clock/clock.html",'<div class="clock" data-ng-model="ctrl.date" ng-model-options="{ getterSetter: true }">\n	<span class="glyphicon glyphicon-stop" data-ng-show="ctrl.ringing" data-ng-click="ctrl.stopAlarm();"></span>\n	<h1>{{ ctrl.date() | time }}</h1> <span data-ng-click="ctrl.openModal();" class="glyphicon glyphicon-cog"></span>\n</div>'),a.put("app/components/configuration-widget/configuration-widget.html",'<v-modal class="vModal--default" onclose="ctrl.close()">\n  <v-dialog heading="My modal" small middle>\n    <v-close label="Close"></v-close>\n\n    <h1>Configuration</h1>\n\n\n    <v-accordion class="vAccordion--default">\n\n	  <v-pane expanded="$first">\n	    <v-pane-header>\n	      <strong>Alarm List</strong>\n	    </v-pane-header>\n\n	    <v-pane-content>\n	        <alarm-list alarms="ctrl.alarms"></alarm-list>\n	    </v-pane-content>\n	  </v-pane>\n\n	  <v-pane>\n	    <v-pane-header>\n	      <strong>Set Alarm</strong>\n	    </v-pane-header>\n\n	    <v-pane-content>\n	        <alarm-setter></alarm-setter>\n	    </v-pane-content>\n	  </v-pane>\n\n	  <v-pane>\n	    <v-pane-header>\n	      <strong>Theme</strong>\n	    </v-pane-header>\n\n	    <v-pane-content>\n	        <ul>\n	        	<li data-ng-repeat="theme in ctrl.themes" data-ng-click="ctrl.selectTheme(theme);">{{ theme.name }} <span data-ng-class="{ \'glyphicon-ok\': theme.selected }" class="glyphicon"></span></li>\n	        </ul>\n	    </v-pane-content>\n	  </v-pane>\n\n	</v-accordion>\n  </v-dialog>\n</v-modal>'),a.put("app/index.html",'<!doctype html>\n<html class="no-js">\n  <head>\n	<meta charset="utf-8">\n	<title>TickTock</title>\n	<meta name="description" content="">\n	<meta name="viewport" content="width=device-width">\n	<link rel="shortcut icon" href="/favicon.ico">\n	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n	<!-- build:css(.) styles/vendor.css -->\n	<!-- bower:css -->\n	<link rel="stylesheet" href="bower_components/v-accordion/dist/v-accordion.css" />\n	<link rel="stylesheet" href="bower_components/valitycss/dist/vality.css" />\n	<link rel="stylesheet" href="bower_components/v-modal/dist/v-modal.css" />\n	<!-- endbower -->\n	<!-- endbuild -->\n	<!-- build:css(.tmp) styles/main.css -->\n	<link rel="stylesheet" href="styles/main.css">\n	<!-- endbuild -->\n	<!-- build:js scripts/vendor/modernizr.js -->\n	<script src="bower_components/modernizr/modernizr.js"></script>\n	<!-- endbuild -->\n\n	<script src="http://www.parsecdn.com/js/parse-1.4.2.min.js"></script>\n\n  </head>\n  <body ng-app="tickTock" data-ng-class="{ warm: $root.theme === \'Warm\', cold: $root.theme === \'Cold\' }" ng-cloak>\n	<!--[if lt IE 10]>\n	  <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>\n	<![endif]-->\n\n\n	<div class="container">\n	  <ng-view class="row marketing">\n	  </ng-view>\n	</div>\n\n\n	<!-- build:js(.) scripts/vendor.js -->\n	<!-- bower:js -->\n	<script src="bower_components/jquery/dist/jquery.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js"></script>\n	<script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js"></script>\n	<script src="bower_components/angular/angular.js"></script>\n	<script src="bower_components/angular-route/angular-route.js"></script>\n	<script src="bower_components/moment/moment.js"></script>\n	<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>\n	<script src="bower_components/moment-recur/moment-recur.js"></script>\n	<script src="bower_components/angular-animate/angular-animate.js"></script>\n	<script src="bower_components/v-accordion/dist/v-accordion.js"></script>\n	<script src="bower_components/v-modal/dist/v-modal.js"></script>\n	<script src="bower_components/angular-audio/app/angular.audio.js"></script>\n	<!-- endbower -->\n	<!-- endbuild -->\n\n	<!-- Google Analytics: change UA-XXXXX-X to be your site\'s ID. -->\n	<script>\n	  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n	  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n	  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n	  e.src=\'//www.google-analytics.com/analytics.js\';\n	  r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\n	  ga(\'create\',\'UA-XXXXX-X\');ga(\'send\',\'pageview\');\n	</script>\n\n		<!-- build:js({app,.tmp}) scripts/main.js -->\n		<script src="scripts/app.js"></script>\n		<script src="scripts/templates.js"></script>\n		<script src="services/storage.js"></script>\n		<script src="services/user.js"></script>\n		<script src="services/alarm.js"></script>\n		<script src="services/config-modal.js"></script>\n		<script src="filters/time.js"></script>\n		<script src="filters/time-compact.js"></script>\n		<script src="pages/home/home.js"></script>\n		<script src="pages/login/login.js"></script>\n		<script src="components/clock/clock.js"></script>\n		<script src="components/alarm-setter/alarm-setter.js"></script>\n		<script src="components/alarm-list/alarm-list.js"></script>\n		<!-- endbuild -->\n</body>\n</html>\n'),a.put("app/pages/home/home.html",'<div class="col-lg-6">\n	<clock alarms="ctrl.alarms"></clock>\n	<configuration-widget alarms="ctrl.alarms"></configuration-widget>\n	<span class="glyphicon glyphicon-off center" data-ng-click="ctrl.logout();"></span>\n</div>'),a.put("app/pages/login/login.html",'<!--\nInspired by http://dribbble.com/shots/917819-iPad-Calendar-Login?list=shots&sort=views&timeframe=ever&offset=461\n-->\n<div class="jumbotron login">\n  <div class="container">\n    <form class="box" name="loginForm" novalidate>\n        <input data-ng-model="ctrl.usr" required type="text" placeholder="username">\n	    <input data-ng-model="ctrl.psw" required type="password" placeholder="password">\n	    <button class="btn btn-default full-width" data-ng-click="ctrl.register(loginForm.$valid);"><span class="glyphicon glyphicon-user"></span></button>\n	    <button class="btn btn-default full-width" data-ng-click="ctrl.login(loginForm.$valid);"><span class="glyphicon glyphicon-log-in"></span></button>\n    </form>\n  </div>\n</div>')}]),function(){"use strict";function a(a){this.$q=a}angular.module("tickTock").service("storageService",a),a.prototype.get=function(a){var b=this.$q.defer(),c=new Parse.Query(a);return c.equalTo("user",Parse.User.current()),c.find({success:function(a){console.log("Successfully retrieved "+a.length+" alarms.");var c=a.map(function(a){var b=a.get("Alarms");return b.alarm=moment(b.alarm),b.recurring=moment.recur(b.recurring),b});b.resolve(c)},error:function(a){console.log("Error: "+a.code+" "+a.message),b.resolve(a)}}),b.promise},a.prototype.set=function(a,b){var c=this.$q.defer(),d=Parse.User.current(),e=Parse.Object.extend(a),f=new e;return f.set(a,b),f.set("user",d),f.save(null,{success:function(a){c.resolve(a)},error:function(){console.log("error")}}),c.promise},a.$inject=["$q"]}(),function(){"use strict";function a(a){this.$q=a}angular.module("tickTock").service("userService",a),a.$inject=["$q"],a.prototype.login=function(a,b){var c=this.$q.defer();return Parse.User.logIn(a,b,{success:function(a){c.resolve({user:a,error:null})},error:function(a,b){c.resolve({user:a,error:b})}}),c.promise},a.prototype.logout=function(){Parse.User.logOut()},a.prototype.isLogged=function(){var a=Parse.User.current();return null!=a},a.prototype.register=function(a,b){var c=this.$q.defer(),d=new Parse.User;return d.set("password",b),d.set("username",a),d.signUp(null,{success:function(a){c.resolve({user:a,error:null})},error:function(a,b){c.resolve({user:a,error:b})}}),c.promise}}(),function(){"use strict";function a(a,b){this.$q=a,this.storageService=b}angular.module("tickTock").service("alarmService",a),a.prototype.getAlarms=function(){var a=this.$q.defer();this.storageService.get("Alarms").then(function(b){a.resolve(b)});return a.promise},a.prototype.setAlarm=function(a){var b=this.$q.defer();this.storageService.set("Alarms",a).then(function(a){b.resolve(a)});return b.promise},a.$inject=["$q","storageService"]}(),function(){"use strict";function a(b){return{modal:b({controller:"ConfigurationWidgetCtrl",controllerAs:"ctrl",templateUrl:"components/configuration-widget/configuration-widget.html"}),setConfig:function(b,c){a.alarms=b,a.instance=c}}}function b(b){this.alarms=a.alarms,this.themes=[{name:"Warm",selected:!1},{name:"Cold",selected:!0}],this.$rootScope=b}angular.module("tickTock").factory("configModal",a),b.prototype.close=function(){a.instance.modal.deactivate()},b.prototype.selectTheme=function(a){this.$rootScope.theme=a.name;for(var b in this.themes)this.themes[b].selected=!1;a.selected=!0},angular.module("tickTock").controller("ConfigurationWidgetCtrl",b),a.$inject=["vModal"],b.$inject=["$rootScope"]}(),function(){"use strict";angular.module("tickTock").filter("time",function(){return function(a){return a.format("hh:mm:ss")}})}(),function(){"use strict";angular.module("tickTock").filter("timeCompact",function(){return function(a){return moment(a.toISOString()).format("hh:mm a")}})}(),function(){"use strict";function a(a,b,c){this.alarms=c,this.userService=b,this.$location=a}angular.module("tickTock").controller("HomeCtrl",a),a.prototype.logout=function(){this.userService.logout(),this.$location.path("/")},a.$inject=["$location","userService","alarms"]}(),function(){"use strict";function a(a,b){this.userService=b,this.$location=a}angular.module("tickTock").controller("LoginCtrl",a),a.prototype.login=function(a){this.userService.login(this.usr,this.psw).then(function(a){a.error?console.log("Unable to login","The data provided is incorrect."):this.$location.path("/clock")}.bind(this))},a.prototype.logout=function(){this.userService.logout(),this.$location.path("/login")},a.prototype.register=function(a){this.userService.register(this.usr,this.psw).then(function(a){a.error?console.log("Unable to register","The data provided is incorrect."):this.$location.path("/clock")}.bind(this))},a.$inject=["$location","userService"]}(),function(){"use strict";function a(a,b,c,d){this.interval=1e3,this.$interval=a,this.alarmService=b,this.date(moment()),this.templateUrl="components/clock/popover.html",this.configModal=c,this.configModal.setConfig(this.alarms,c),this.alarm=d.load("sounds/alarm.mp3"),this.ringing=!1,this.tick()}angular.module("tickTock").directive("clock",function(){return{restrict:"E",templateUrl:"app/components/clock/clock.html",controller:a,controllerAs:"ctrl",bindToController:!0,scope:{alarms:"="}}}),a.prototype.tick=function(){this.$interval(function(){this.date().add(1,"second")}.bind(this),this.interval)},a.prototype.openModal=function(){this.configModal.modal.activate()},a.prototype.closeModal=function(){this.configModal.modal.deactivate()},a.prototype.checkAlarms=function(a){for(var b in this.alarms){var c=this.alarms[b],d=c.alarm,e=c.recurring;c.on&&e.matches(d)&&d.hour()===a.hour()&&d.minutes()===a.minutes()&&this.ringAlarm()}},a.prototype.ringAlarm=function(){this.ringing||this.alarm.play()},a.prototype.stopAlarm=function(){this.alarm.stop(),this.ringing=!1},a.prototype.snooze=function(a){},a.prototype.date=function(a){return void 0===a?(this.checkAlarms(this._date),this._date):(this._date=a,void this.checkAlarms(a))},a.$inject=["$interval","alarmService","configModal","ngAudio"]}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/components/alarm-setter/alarm-setter.html",controller:b,controllerAs:"ctrl",bindToController:!0,scope:{}};return a}function b(a){this.alarmService=a}b.prototype.setAlarmWeekdays=function(a){if(a){var b;b=moment.recur().every(["Monday","Tuesday","Wednesday","Thursday","Friday"]).daysOfWeek(),this.setAlarm(b,moment(this.alarmTime))}},b.prototype.setAlarmWeekends=function(a){if(a){var b;b=moment.recur().every(["Sunday","Saturday"]).daysOfWeek(),this.setAlarm(b,moment(this.alarmTime))}},b.prototype.setAlarmCustom=function(a,b){if(a){var c;c=moment.recur().every(b).daysOfWeek(),this.setAlarm(c,moment(this.alarmTime))}},b.prototype.setAlarm=function(a,b){this.alarmService.setAlarm({recurring:a,alarm:b,message:this.alarmName,on:!0}).then(function(a){console.log(a)}.bind(this))},angular.module("tickTock").directive("alarmSetter",a),b.$inject=["alarmService"]}(),function(){"use strict";function a(){var a={restrict:"E",templateUrl:"app/components/alarm-list/alarm-list.html",controller:b,controllerAs:"ctrl",bindToController:!0,scope:{alarms:"="}};return a}function b(){}b.prototype.method=function(){},angular.module("tickTock").directive("alarmList",a)}();