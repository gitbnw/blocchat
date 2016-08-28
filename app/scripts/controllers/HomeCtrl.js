 (function() {
     function HomeCtrl(roomService, Message, Fixtures, modalService, $cookies, $document, $scope) {

       var currentModal = {};

       var roomModal = {
         id: 'room',
         title: 'Create room',
        //  form: Fixtures.getForm('formCreateRoom'),
        //  submit: create,
         noDismiss: false,
         tabbed: false
       };

         this.rooms = roomService.all;
         var create = function() {

         }

         $scope.documentData = {};

         //  $scope.getFieldTemplateUrl = function(field) {
         //      console.log(field)
         //      return '/templates/fields/' + field.dataType + '.html';
         //  };


         this.showModal = function(modal) {

             $scope.currentModal = modal;

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
         .controller('HomeCtrl', ['roomService', 'Message', 'Fixtures', 'modalService','$cookies', '$document', '$scope', HomeCtrl]);
 })();
