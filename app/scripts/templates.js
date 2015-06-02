angular.module('tickTock').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/alarm-list/alarm-list.html',
    "<v-accordion class=\"vAccordion--default\">\n" +
    "\n" +
    "  <v-pane ng-repeat=\"alarm in ctrl.alarms\" expanded=\"$first\">\n" +
    "    <v-pane-header>\n" +
    "      <strong>{{ alarm.message }}</strong>\n" +
    "    </v-pane-header>\n" +
    "\n" +
    "    <v-pane-content>\n" +
    "        <i class=\"glyphicon \" data-ng-class=\"{ 'glyphicon-ok-sign': alarm.on, 'glyphicon-minus-sign': !alarm.on }\"></i>\n" +
    "        <h1>{{ alarm.alarm | timeCompact }}</h1>\n" +
    "    </v-pane-content>\n" +
    "  </v-pane>\n" +
    "\n" +
    "</v-accordion>"
  );


  $templateCache.put('app/components/alarm-setter/alarm-setter.html',
    "<form name=\"alarmForm\" class=\"alarm-setter\">\n" +
    "\t<input name=\"description\" placeholder=\"Description\" type=\"text\" class=\"description\" data-ng-class=\"{ error: alarmForm.$submitted && alarmForm.description.$invalid }\" data-ng-model=\"ctrl.alarmName\" required />\n" +
    "\t<timepicker ng-model=\"ctrl.alarmTime\" hour-step=\"1\" minute-step=\"15\" show-meridian=\"true\"></timepicker>\n" +
    "\n" +
    "\t<input type=\"submit\" class=\"btn btn-primary\" data-ng-click=\"ctrl.setAlarmWeekdays(alarmForm.$valid);\" value=\"Weekdays\"></input>\n" +
    "\t<input type=\"submit\" class=\"btn btn-primary\" data-ng-click=\"ctrl.setAlarmWeekends(alarmForm.$valid);\" value=\"Weekend\"></input>\n" +
    "</form>"
  );


  $templateCache.put('app/components/clock/clock.html',
    "<div class=\"clock\" data-ng-model=\"ctrl.date\" ng-model-options=\"{ getterSetter: true }\">\n" +
    "\t<span class=\"glyphicon glyphicon-stop\" data-ng-show=\"ctrl.ringing\" data-ng-click=\"ctrl.stopAlarm();\"></span>\n" +
    "\t<h1>{{ ctrl.date() | time }}</h1> <span data-ng-click=\"ctrl.openModal();\" class=\"glyphicon glyphicon-cog\"></span>\n" +
    "</div>"
  );


  $templateCache.put('app/components/configuration-widget/configuration-widget.html',
    "<v-modal class=\"vModal--default\" onclose=\"ctrl.close()\">\n" +
    "  <v-dialog heading=\"My modal\" small middle>\n" +
    "    <v-close label=\"Close\"></v-close>\n" +
    "\n" +
    "    <h1>Configuration</h1>\n" +
    "\n" +
    "\n" +
    "    <v-accordion class=\"vAccordion--default\">\n" +
    "\n" +
    "\t  <v-pane expanded=\"$first\">\n" +
    "\t    <v-pane-header>\n" +
    "\t      <strong>Alarm List</strong>\n" +
    "\t    </v-pane-header>\n" +
    "\n" +
    "\t    <v-pane-content>\n" +
    "\t        <alarm-list alarms=\"ctrl.alarms\"></alarm-list>\n" +
    "\t    </v-pane-content>\n" +
    "\t  </v-pane>\n" +
    "\n" +
    "\t  <v-pane>\n" +
    "\t    <v-pane-header>\n" +
    "\t      <strong>Set Alarm</strong>\n" +
    "\t    </v-pane-header>\n" +
    "\n" +
    "\t    <v-pane-content>\n" +
    "\t        <alarm-setter></alarm-setter>\n" +
    "\t    </v-pane-content>\n" +
    "\t  </v-pane>\n" +
    "\n" +
    "\t  <v-pane>\n" +
    "\t    <v-pane-header>\n" +
    "\t      <strong>Theme</strong>\n" +
    "\t    </v-pane-header>\n" +
    "\n" +
    "\t    <v-pane-content>\n" +
    "\t        <ul>\n" +
    "\t        \t<li data-ng-repeat=\"theme in ctrl.themes\" data-ng-click=\"ctrl.selectTheme(theme);\">{{ theme.name }} <span data-ng-class=\"{ 'glyphicon-ok': theme.selected }\" class=\"glyphicon\"></span></li>\n" +
    "\t        </ul>\n" +
    "\t    </v-pane-content>\n" +
    "\t  </v-pane>\n" +
    "\n" +
    "\t</v-accordion>\n" +
    "  </v-dialog>\n" +
    "</v-modal>"
  );


  $templateCache.put('app/index.html',
    "<!doctype html>\n" +
    "<html class=\"no-js\">\n" +
    "  <head>\n" +
    "\t<meta charset=\"utf-8\">\n" +
    "\t<title>TickTock</title>\n" +
    "\t<meta name=\"description\" content=\"\">\n" +
    "\t<meta name=\"viewport\" content=\"width=device-width\">\n" +
    "\t<link rel=\"shortcut icon\" href=\"/favicon.ico\">\n" +
    "\t<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n" +
    "\t<!-- build:css(.) styles/vendor.css -->\n" +
    "\t<!-- bower:css -->\n" +
    "\t<link rel=\"stylesheet\" href=\"bower_components/v-accordion/dist/v-accordion.css\" />\n" +
    "\t<link rel=\"stylesheet\" href=\"bower_components/valitycss/dist/vality.css\" />\n" +
    "\t<link rel=\"stylesheet\" href=\"bower_components/v-modal/dist/v-modal.css\" />\n" +
    "\t<!-- endbower -->\n" +
    "\t<!-- endbuild -->\n" +
    "\t<!-- build:css(.tmp) styles/main.css -->\n" +
    "\t<link rel=\"stylesheet\" href=\"styles/main.css\">\n" +
    "\t<!-- endbuild -->\n" +
    "\t<!-- build:js scripts/vendor/modernizr.js -->\n" +
    "\t<script src=\"bower_components/modernizr/modernizr.js\"></script>\n" +
    "\t<!-- endbuild -->\n" +
    "\n" +
    "\t<script src=\"http://www.parsecdn.com/js/parse-1.4.2.min.js\"></script>\n" +
    "\n" +
    "  </head>\n" +
    "  <body ng-app=\"tickTock\" data-ng-class=\"{ warm: $root.theme === 'Warm', cold: $root.theme === 'Cold' }\" ng-cloak>\n" +
    "\t<!--[if lt IE 10]>\n" +
    "\t  <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "\t<![endif]-->\n" +
    "\n" +
    "\n" +
    "\t<div class=\"container\">\n" +
    "\t  <ng-view class=\"row marketing\">\n" +
    "\t  </ng-view>\n" +
    "\t</div>\n" +
    "\n" +
    "\n" +
    "\t<!-- build:js(.) scripts/vendor.js -->\n" +
    "\t<!-- bower:js -->\n" +
    "\t<script src=\"bower_components/jquery/dist/jquery.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js\"></script>\n" +
    "\t<script src=\"bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js\"></script>\n" +
    "\t<script src=\"bower_components/angular/angular.js\"></script>\n" +
    "\t<script src=\"bower_components/angular-route/angular-route.js\"></script>\n" +
    "\t<script src=\"bower_components/moment/moment.js\"></script>\n" +
    "\t<script src=\"bower_components/angular-bootstrap/ui-bootstrap-tpls.js\"></script>\n" +
    "\t<script src=\"bower_components/moment-recur/moment-recur.js\"></script>\n" +
    "\t<script src=\"bower_components/angular-animate/angular-animate.js\"></script>\n" +
    "\t<script src=\"bower_components/v-accordion/dist/v-accordion.js\"></script>\n" +
    "\t<script src=\"bower_components/v-modal/dist/v-modal.js\"></script>\n" +
    "\t<script src=\"bower_components/angular-audio/app/angular.audio.js\"></script>\n" +
    "\t<!-- endbower -->\n" +
    "\t<!-- endbuild -->\n" +
    "\n" +
    "\t<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->\n" +
    "\t<script>\n" +
    "\t  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n" +
    "\t  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n" +
    "\t  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n" +
    "\t  e.src='//www.google-analytics.com/analytics.js';\n" +
    "\t  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n" +
    "\t  ga('create','UA-XXXXX-X');ga('send','pageview');\n" +
    "\t</script>\n" +
    "\n" +
    "\t\t<!-- build:js({app,.tmp}) scripts/main.js -->\n" +
    "\t\t<script src=\"scripts/app.js\"></script>\n" +
    "\t\t<script src=\"scripts/templates.js\"></script>\n" +
    "\t\t<script src=\"services/storage.js\"></script>\n" +
    "\t\t<script src=\"services/user.js\"></script>\n" +
    "\t\t<script src=\"services/alarm.js\"></script>\n" +
    "\t\t<script src=\"services/config-modal.js\"></script>\n" +
    "\t\t<script src=\"filters/time.js\"></script>\n" +
    "\t\t<script src=\"filters/time-compact.js\"></script>\n" +
    "\t\t<script src=\"pages/home/home.js\"></script>\n" +
    "\t\t<script src=\"pages/login/login.js\"></script>\n" +
    "\t\t<script src=\"components/clock/clock.js\"></script>\n" +
    "\t\t<script src=\"components/alarm-setter/alarm-setter.js\"></script>\n" +
    "\t\t<script src=\"components/alarm-list/alarm-list.js\"></script>\n" +
    "\t\t<!-- endbuild -->\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/pages/home/home.html',
    "<div class=\"col-lg-6\">\n" +
    "\t<clock alarms=\"ctrl.alarms\"></clock>\n" +
    "\t<configuration-widget alarms=\"ctrl.alarms\"></configuration-widget>\n" +
    "\t<span class=\"glyphicon glyphicon-off center-icon \" data-ng-click=\"ctrl.logout();\"></span>\n" +
    "</div>"
  );


  $templateCache.put('app/pages/login/login.html',
    "<!--\n" +
    "Inspired by http://dribbble.com/shots/917819-iPad-Calendar-Login?list=shots&sort=views&timeframe=ever&offset=461\n" +
    "-->\n" +
    "<div class=\"jumbotron login\">\n" +
    "  <div class=\"container\">\n" +
    "    <form class=\"box\" name=\"loginForm\" novalidate>\n" +
    "        <input data-ng-model=\"ctrl.usr\" required type=\"text\" placeholder=\"username\">\n" +
    "\t    <input data-ng-model=\"ctrl.psw\" required type=\"password\" placeholder=\"password\">\n" +
    "\t    <button class=\"btn btn-default full-width\" data-ng-click=\"ctrl.register(loginForm.$valid);\"><span class=\"glyphicon glyphicon-user\"></span></button>\n" +
    "\t    <button class=\"btn btn-default full-width\" data-ng-click=\"ctrl.login(loginForm.$valid);\"><span class=\"glyphicon glyphicon-log-in\"></span></button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>"
  );

}]);
