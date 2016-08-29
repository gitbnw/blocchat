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
                        return {'modalObj': modal};
                    }
                }
            });

        };
        return modalService;
    };
    angular
        .module('bloc_chat')
        .factory('modalService', ['$uibModal', modalService]);
})();
