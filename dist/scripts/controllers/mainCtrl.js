 (function() {
     function mainCtrl($scope, Rooms, Messages, $uibModal) {
         var $ctrl = this;



         $ctrl.openComponentModal = function(modalConstruct) {

             $ctrl.modalConstruct = Fixtures.getModalConstruct(modalConstruct)

             var modalInstance = $uibModal.open({
                 animation: $ctrl.animationsEnabled,
                 component: 'modalComponent',
                 resolve: {
                     modalProperties: function() {
                         return $ctrl.modalConstruct;
                     }
                 }
             });

             modalInstance.result.then(function(selectedItem) {
                 $ctrl.selected = selectedItem;
             }, function() {
                 $log.info('modal-component dismissed at: ' + new Date());
             });
         };
         $ctrl.rooms = Rooms.all;

         $ctrl.setCurrentRoom = function(room) {
             $ctrl.currentRoom = room;
             $ctrl.messages = Rooms.getMessages(room.$id);
         }

         $ctrl.messageData = {};

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
         .controller('mainCtrl', ['$scope', 'Rooms', 'Messages', '$uibModal', mainCtrl])
 })();
