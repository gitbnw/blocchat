 (function() {
     function HomeCtrl(roomService, Message, $uibModal, $cookies, $document, $scope) {

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

         $scope.documentData = {};
         $scope.getFieldTemplateUrl = function(field) {
           console.log(field)
             return '/templates/fields/' + field.dataType + '.html';
         };


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

         $scope.messageData = {};

         this.sendMessage = function() {
             var cookieWObject = $cookies.getObject('blocChatCurrentUser');
             var username = cookieWObject.currentUser.name;
             $scope.messageData.username = username
             $scope.messageData.roomId = $scope.currentRoom.$id
             Message.send($scope.messageData)
         }

     }


     angular
         .module('bloc_chat')
         .controller('HomeCtrl', ['roomService', 'Message', '$uibModal', '$cookies', '$document', '$scope', HomeCtrl]);
 })();
