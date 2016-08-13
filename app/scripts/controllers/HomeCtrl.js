 (function() {
     function HomeCtrl(roomService, $uibModal, $log, $document, $scope) {

         function BlocChatCookies($cookies, $uibModal) {
             var currentUser = $cookies.get('blocChatCurrentUser');
             if (!currentUser || currentUser === '') {
                 $uibModal.open({
                     // Modal configuration object properties
                 })
             }
         }

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

         this.setCurrentRoom = function(room) {
             $scope.currentRoom = room;
             this.messages = roomService.getMessages(room.$id);
         }


     };

     angular
         .module('bloc_chat')
         .controller('HomeCtrl', ['roomService', '$uibModal', '$log', '$document', '$scope', HomeCtrl]);
 })();