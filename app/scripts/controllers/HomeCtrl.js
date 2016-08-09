 (function() {
     function HomeCtrl(roomService, $uibModal, $log, $document) {

         this.rooms = roomService.all;

         this.showModal = function() {

             var modalInstance = $uibModal.open({
                 templateUrl: 'modal.html',
                 controller: 'ModalCtrl',
                 size: 'sm',
                 appendTo: $document.find('div').eq(0)
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
         .controller('HomeCtrl', ['roomService', '$uibModal', '$log', '$document',HomeCtrl]);
 })();
