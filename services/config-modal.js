(function() {
    'use strict';

    function ConfigModal(vModal) {
        return {
        	modal: vModal({
			    controller: 'ConfigurationWidgetCtrl',
			    controllerAs: 'ctrl',
			    templateUrl: 'components/configuration-widget/configuration-widget.html'
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

    function ConfigurationWidgetCtrl () {
    	this.alarms = ConfigModal.alarms;
    }

    ConfigurationWidgetCtrl.prototype.close = function () {
		ConfigModal.instance.modal.deactivate();
    };
    
    angular
        .module('tickTock')
        .controller('ConfigurationWidgetCtrl', ConfigurationWidgetCtrl);

    ConfigModal.$inject = ['vModal'];

})();