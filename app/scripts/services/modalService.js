(function() {
        function modalService($uibModal) {
          
            this.show = function() {
                $uibModal.open({
                    templateUrl: './templates/modal.html',
                    controller: 'HomeCtrl',
                    backdrop: 'static',
                    size: 'sm'
                })
            }

            angular
                .module('bloc_chat')
                .factory('modalService', ['$uibModal', modalService]);
        })();
