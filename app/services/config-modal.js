(function() {
    'use strict';

    function ConfigModal(vModal) {
        return {
        	modal: vModal({
			    controller: 'ConfigurationWidgetCtrl',
			    controllerAs: 'ctrl',
			    templateUrl: 'app/components/configuration-widget/configuration-widget.html'
			  }),
        	setConfig: function(alarms, instance){
        		ConfigModal.alarms = alarms;
        		ConfigModal.instance = instance;
        	}
        }
    }

    angular
        .module('tickTock')
        .factory('configModal', ConfigModal);

    function ConfigurationWidgetCtrl ($rootScope) {
    	this.alarms = ConfigModal.alarms;
        this.themes = [ {name: 'Warm', selected: false}, {name: 'Cold', selected: true} ];
        this.$rootScope = $rootScope;
    }

    ConfigurationWidgetCtrl.prototype.close = function () {
		ConfigModal.instance.modal.deactivate();
    };

    ConfigurationWidgetCtrl.prototype.selectTheme = function (theme) {
        this.$rootScope.theme = theme.name;
        for(var curTheme in this.themes) {
            this.themes[curTheme].selected = false;
        }    
        theme.selected = true;
    };

    angular
        .module('tickTock')
        .controller('ConfigurationWidgetCtrl', ConfigurationWidgetCtrl);

    ConfigModal.$inject = ['vModal'];

    ConfigurationWidgetCtrl.$inject = ['$rootScope']

})();