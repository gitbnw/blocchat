 (function() {
     function mainCtrl($scope, Rooms, Messages, Fixtures, $uibModal) {
         var $ctrl = this;

         $ctrl.openComponentModal = function(modalConstruct) {

             $ctrl.modalConstruct = Fixtures.getModalConstruct(modalConstruct)
             var modalInstance = $uibModal.open({
                 animation: $ctrl.animationsEnabled,
                 component: 'modalComponent',
                 resolve: {
                     modalProps: function() {
                         return $ctrl.modalConstruct;
                     }
                 }
             });

             modalInstance.result.then(function(selectedItem) {
                 $ctrl.selected = selectedItem;
             }, function() {

             });
         };
         $ctrl.rooms = Rooms.all;

         $ctrl.setCurrentRoom = function(room) {
             $ctrl.currentRoom = room;
             $ctrl.messages = Rooms.getMessages(room.$id);
         }

         $ctrl.sendMessage = function() {
             var cookieWObject = $cookies.getObject('blocChatCurrentUser');
             var username = cookieWObject.currentUser.name;
             $ctrl.messageData.username = username
             $ctrl.messageData.roomId = $ctrl.currentRoom.$id
             Messages.send($ctrl.messageData)
         }
     }
     angular
         .module('bloc_chat')
         .controller('mainCtrl', ['$scope', 'Rooms', 'Messages', 'Fixtures', '$uibModal', mainCtrl])
 })();
