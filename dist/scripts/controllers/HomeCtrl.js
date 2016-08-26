 (function() {
     function HomeCtrl(roomService, Message, Fixtures, $uibModal, $cookies, $document, $scope) {

         this.rooms = roomService.all;
         var create = function() {

         }
         var roomModal = {
             id: 'room',
             title: 'Create room',
             form: Fixtures.getForm('formCreateRoom'),
             submit: create,
             noDismiss: true
         }

         $scope.documentData = {};

         //  $scope.getFieldTemplateUrl = function(field) {
         //      console.log(field)
         //      return '/templates/fields/' + field.dataType + '.html';
         //  };


         this.showModal = function() {

             $scope.currentModal = roomModal;

             $uibModal.open({
                 templateUrl: './templates/modal.html',
                 controller: 'HomeCtrl',
                 size: 'sm',
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
         .controller('HomeCtrl', ['roomService', 'Message', 'Fixtures', '$uibModal', '$cookies', '$document', '$scope', HomeCtrl]);
 })();
