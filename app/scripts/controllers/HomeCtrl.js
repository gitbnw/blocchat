 (function() {
     function HomeCtrl(roomService, $uibModal, $log, $document, $scope) {

         this.rooms = roomService.all;

         this.showModal = function() {

             var modalInstance = $uibModal.open({
                 templateUrl: './templates/modal.html',
                 controller: 'ModalCtrl',
                 size: 'sm',
             });

             modalInstance.result.then(function(selectedItem) {
                 this.selected = selectedItem;
             }, function() {
                 $log.info('Modal dismissed at: ' + new Date());
             });
         };
     };

     angular
         .module('bloc_chat')
         .controller('HomeCtrl', ['roomService', '$uibModal', '$log', '$document', '$scope', HomeCtrl]);
 })();
