 (function() {
     function HomeCtrl(roomService, $uibModal, $log, $document, $scope) {

         this.rooms = roomService.all;

         $scope.modalAttr = {
            title: "Create a new room",
            class: "add-room",
            id: "inputRoomName",
            pholder: "Cool chat room",
            inputLbl: "Room name",
            submitLbl: "Create Room",
            item: "rooms",
            noDismiss: false
         }


         this.showModal = function() {

             $uibModal.open({
                 templateUrl: './templates/modal.html',
                 controller: 'ModalCtrl',
                 size: 'sm',
                 resolve: {
                     modalAttr: function() {
                         return $scope.modalAttr;
                     }
                 }
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
