(function() {
    function modalService($uibModal) {

        modalService.showModal = function(modal) {

            $uibModal.open({
                templateUrl: './templates/modal.html',
                controller: modal.controller,
                backdrop: 'static',
                size: 'sm',
                resolve: {
                    param: function() {
                        return { 'modalObj': modal };
                    }
                }
            });

        }

        modalService.getCurrentTab = function(modal, tabId) {
            var selTab = modal.tabs.filter(function(selTab) {
                return selTab.id === tabId;
            })[0];

            return selTab;
        }

        var getDefaultTab = function(modal) {
            var defaultTab = null;
            modal.tabs.forEach(function(tab) {
                if (tab.default) {
                    defaultTab = tab;
                }
            });
            return defaultTab;
        };

        modalService.setCurrentForm = function(modal) {
            if (!modal.tabbed) {
                modal.currentForm = modal.form;
            } else {
                modal.currentForm = modal.currentTab.form;
            }
            return modal
        };

        modalService.setCurrentModal = function(modal) {
            if (modal.tabbed) {
                modal.currentTab = getDefaultTab(modal);
            }
            modalService.setCurrentForm(modal);
            return modal;
        };

        return modalService;
    }
    angular
        .module('bloc_chat')
        .factory('modalService', ['$uibModal', modalService]);
})();
