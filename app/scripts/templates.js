angular.module('tickTock').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/alarm-list/alarm-list.html',
    "<v-accordion class=\"vAccordion--default\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <v-pane ng-repeat=\"alarm in ctrl.alarms\" expanded=\"$first\">\r" +
    "\n" +
    "    <v-pane-header>\r" +
    "\n" +
    "      <strong>{{ alarm.message }}</strong>\r" +
    "\n" +
    "    </v-pane-header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <v-pane-content>\r" +
    "\n" +
    "        <i class=\"glyphicon \" data-ng-class=\"{ 'glyphicon-ok-sign': alarm.on, 'glyphicon-minus-sign': !alarm.on }\"></i>\r" +
    "\n" +
    "        <h1>{{ alarm.alarm | timeCompact }}</h1>\r" +
    "\n" +
    "    </v-pane-content>\r" +
    "\n" +
    "  </v-pane>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</v-accordion>"
  );


  $templateCache.put('app/components/alarm-setter/alarm-setter.html',
    "<form name=\"alarmForm\" class=\"alarm-setter\">\r" +
    "\n" +
    "\t<input name=\"description\" placeholder=\"Description\" type=\"text\" class=\"description\" data-ng-class=\"{ error: alarmForm.$submitted && alarmForm.description.$invalid }\" data-ng-model=\"ctrl.alarmName\" required />\r" +
    "\n" +
    "\t<timepicker ng-model=\"ctrl.alarmTime\" hour-step=\"1\" minute-step=\"15\" show-meridian=\"true\"></timepicker>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<input type=\"submit\" class=\"btn btn-primary\" data-ng-click=\"ctrl.setAlarmWeekdays(alarmForm.$valid);\" value=\"Weekdays\"></input>\r" +
    "\n" +
    "\t<input type=\"submit\" class=\"btn btn-primary\" data-ng-click=\"ctrl.setAlarmWeekends(alarmForm.$valid);\" value=\"Weekend\"></input>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('app/components/clock/clock.html',
    "<div class=\"clock\" data-ng-model=\"ctrl.date\" ng-model-options=\"{ getterSetter: true }\">\r" +
    "\n" +
    "\t<span class=\"glyphicon glyphicon-stop\" data-ng-show=\"ctrl.ringing\" data-ng-click=\"ctrl.stopAlarm();\"></span>\r" +
    "\n" +
    "\t<h1>{{ ctrl.date() | time }}</h1> <span data-ng-click=\"ctrl.openModal();\" class=\"glyphicon glyphicon-cog\"></span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/components/configuration-widget/configuration-widget.html',
    "<v-modal class=\"vModal--default\" onclose=\"ctrl.close()\">\r" +
    "\n" +
    "  <v-dialog heading=\"My modal\" small middle>\r" +
    "\n" +
    "    <v-close label=\"Close\"></v-close>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h1>Configuration</h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <v-accordion class=\"vAccordion--default\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t  <v-pane expanded=\"$first\">\r" +
    "\n" +
    "\t    <v-pane-header>\r" +
    "\n" +
    "\t      <strong>Alarm List</strong>\r" +
    "\n" +
    "\t    </v-pane-header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t    <v-pane-content>\r" +
    "\n" +
    "\t        <alarm-list alarms=\"ctrl.alarms\"></alarm-list>\r" +
    "\n" +
    "\t    </v-pane-content>\r" +
    "\n" +
    "\t  </v-pane>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t  <v-pane>\r" +
    "\n" +
    "\t    <v-pane-header>\r" +
    "\n" +
    "\t      <strong>Set Alarm</strong>\r" +
    "\n" +
    "\t    </v-pane-header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t    <v-pane-content>\r" +
    "\n" +
    "\t        <alarm-setter></alarm-setter>\r" +
    "\n" +
    "\t    </v-pane-content>\r" +
    "\n" +
    "\t  </v-pane>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t  <v-pane>\r" +
    "\n" +
    "\t    <v-pane-header>\r" +
    "\n" +
    "\t      <strong>Theme</strong>\r" +
    "\n" +
    "\t    </v-pane-header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t    <v-pane-content>\r" +
    "\n" +
    "\t        <ul>\r" +
    "\n" +
    "\t        \t<li data-ng-repeat=\"theme in ctrl.themes\" data-ng-click=\"ctrl.selectTheme(theme);\">{{ theme.name }} <span data-ng-class=\"{ 'glyphicon-ok': theme.selected }\" class=\"glyphicon\"></span></li>\r" +
    "\n" +
    "\t        </ul>\r" +
    "\n" +
    "\t    </v-pane-content>\r" +
    "\n" +
    "\t  </v-pane>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t</v-accordion>\r" +
    "\n" +
    "  </v-dialog>\r" +
    "\n" +
    "</v-modal>"
  );


  $templateCache.put('app/index.html',
    "<!doctype html>\r" +
    "\n" +
    "<html class=\"no-js\">\r" +
    "\n" +
    "  <head>\r" +
    "\n" +
    "\t<meta charset=\"utf-8\">\r" +
    "\n" +
    "\t<title>TickTock</title>\r" +
    "\n" +
    "\t<meta name=\"description\" content=\"\">\r" +
    "\n" +
    "\t<meta name=\"viewport\" content=\"width=device-width\">\r" +
    "\n" +
    "\t<link rel=\"shortcut icon\" href=\"/favicon.ico\">\r" +
    "\n" +
    "\t<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\r" +
    "\n" +
    "\t<!-- build:css(.) styles/vendor.css -->\r" +
    "\n" +
    "\t<!-- bower:css -->\r" +
    "\n" +
    "\t<link rel=\"stylesheet\" href=\"bower_components/v-accordion/dist/v-accordion.css\" />\r" +
    "\n" +
    "\t<link rel=\"stylesheet\" href=\"bower_components/valitycss/dist/vality.css\" />\r" +
    "\n" +
    "\t<link rel=\"stylesheet\" href=\"bower_components/v-modal/dist/v-modal.css\" />\r" +
    "\n" +
    "\t<!-- endbower -->\r" +
    "\n" +
    "\t<!-- endbuild -->\r" +
    "\n" +
    "\t<!-- build:css(.tmp) styles/main.css -->\r" +
    "\n" +
    "\t<link rel=\"stylesheet\" href=\"styles/main.css\">\r" +
    "\n" +
    "\t<!-- endbuild -->\r" +
    "\n" +
    "\t<!-- build:js scripts/vendor/modernizr.js -->\r" +
    "\n" +
    "\t<script src=\"bower_components/modernizr/modernizr.js\"></script>\r" +
    "\n" +
    "\t<!-- endbuild -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<script src=\"http://www.parsecdn.com/js/parse-1.4.2.min.js\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </head>\r" +
    "\n" +
    "  <body ng-app=\"tickTock\" data-ng-class=\"{ warm: $root.theme === 'Warm', cold: $root.theme === 'Cold' }\" ng-cloak>\r" +
    "\n" +
    "\t<!--[if lt IE 10]>\r" +
    "\n" +
    "\t  <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\r" +
    "\n" +
    "\t<![endif]-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class=\"container\">\r" +
    "\n" +
    "\t  <ng-view class=\"row marketing\">\r" +
    "\n" +
    "\t  </ng-view>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<!-- build:js(.) scripts/vendor.js -->\r" +
    "\n" +
    "\t<!-- bower:js -->\r" +
    "\n" +
    "\t<script src=\"bower_components/jquery/dist/jquery.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/angular/angular.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/angular-route/angular-route.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/moment/moment.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/angular-bootstrap/ui-bootstrap-tpls.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/moment-recur/moment-recur.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/angular-animate/angular-animate.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/v-accordion/dist/v-accordion.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/v-modal/dist/v-modal.js\"></script>\r" +
    "\n" +
    "\t<script src=\"bower_components/angular-audio/app/angular.audio.js\"></script>\r" +
    "\n" +
    "\t<!-- endbower -->\r" +
    "\n" +
    "\t<!-- endbuild -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->\r" +
    "\n" +
    "\t<script>\r" +
    "\n" +
    "\t  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\r" +
    "\n" +
    "\t  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\r" +
    "\n" +
    "\t  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\r" +
    "\n" +
    "\t  e.src='//www.google-analytics.com/analytics.js';\r" +
    "\n" +
    "\t  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\r" +
    "\n" +
    "\t  ga('create','UA-XXXXX-X');ga('send','pageview');\r" +
    "\n" +
    "\t</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t<!-- build:js({app,.tmp}) scripts/main.js -->\r" +
    "\n" +
    "\t\t<script src=\"scripts/app.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"scripts/templates.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"services/storage.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"services/user.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"services/alarm.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"services/config-modal.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"filters/time.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"filters/time-compact.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"pages/home/home.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"pages/login/login.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"components/clock/clock.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"components/alarm-setter/alarm-setter.js\"></script>\r" +
    "\n" +
    "\t\t<script src=\"components/alarm-list/alarm-list.js\"></script>\r" +
    "\n" +
    "\t\t<!-- endbuild -->\r" +
    "\n" +
    "</body>\r" +
    "\n" +
    "</html>\r" +
    "\n"
  );


  $templateCache.put('app/pages/home/home.html',
    "<div class=\"col-lg-6\">\r" +
    "\n" +
    "\t<clock alarms=\"ctrl.alarms\"></clock>\r" +
    "\n" +
    "\t<configuration-widget alarms=\"ctrl.alarms\"></configuration-widget>\r" +
    "\n" +
    "\t<span class=\"glyphicon glyphicon-off center-icon \" data-ng-click=\"ctrl.logout();\"></span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/pages/login/login.html',
    "<!--\r" +
    "\n" +
    "Inspired by http://dribbble.com/shots/917819-iPad-Calendar-Login?list=shots&sort=views&timeframe=ever&offset=461\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "<div class=\"jumbotron login\">\r" +
    "\n" +
    "  <div class=\"container\">\r" +
    "\n" +
    "    <form class=\"box\" name=\"loginForm\" novalidate>\r" +
    "\n" +
    "        <input data-ng-model=\"ctrl.usr\" required type=\"text\" placeholder=\"username\">\r" +
    "\n" +
    "\t    <input data-ng-model=\"ctrl.psw\" required type=\"password\" placeholder=\"password\">\r" +
    "\n" +
    "\t    <button class=\"btn btn-default full-width\" data-ng-click=\"ctrl.register(loginForm.$valid);\"><span class=\"glyphicon glyphicon-user\"></span></button>\r" +
    "\n" +
    "\t    <button class=\"btn btn-default full-width\" data-ng-click=\"ctrl.login(loginForm.$valid);\"><span class=\"glyphicon glyphicon-log-in\"></span></button>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

}]);
