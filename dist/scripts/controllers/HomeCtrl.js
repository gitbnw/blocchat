 (function() {
     function HomeCtrl($scope, param) {
         console.log(param)
             // console.log(param.modalObj)
             // $scope.currentModal = $scope.modalFromSvc
             // $scope.currentModal = {}

         var setCurrentModal = function(modal) {
             $scope.currentModal = modal
             return setCurrentForm(modal)
         }

         var setCurrentForm = function(modal) {
             if (!modal.tabbed) {
                 $scope.currentForm = modal.form;
             } else {
                 $scope.currentTab = getDefaultTab(modal);
                 $scope.currentForm = $scope.currentTab.form
             }
         }

         $scope.currentModal = setCurrentModal(param)
         $scope.currentForm = setCurrentForm(param)



         // var roomModal = {
         //     id: 'room',
         //     title: 'Create room',
         //     noDismiss: false,
         //     tabbed: false
         // };

         // this.rooms = roomService.all;
         // var create = function() {

         // }

         // $scope.documentData = {};

         $scope.getFieldTemplateUrl = function(field) {
             console.log(field)
             return '/templates/fields/' + field.dataType + '.html';
         };

         // var getDefaultTab = function(modal) {
         //     angular.forEach(tabs, function(value, key) {
         //         /* do something for all key: value pairs */
         //         console.log(value + ': ' + key)
         //     });
         // };


         // this.showModal = function(modal) {

         //     $scope.currentModal = modal;

         //     if (!$scope.currentModal.tabbed) {
         //         $scope.currentForm = modal.form;
         //     } else {

         //         $scope.currentTab = getDefaultTab(modal);
         //         $scope.currentForm = $scope.currentTab.form
         //     }



         //     $uibModal.open({
         //         templateUrl: './templates/modal.html',
         //         controller: 'HomeCtrl',
         //         size: 'sm',
         //     });


         // };

         // this.setCurrentRoom = function(room) {
         //     $scope.currentRoom = room;
         //     this.messages = roomService.getMessages(room.$id);
         // }

         // $scope.messageData = {};

         // this.sendMessage = function() {
         //     var cookieWObject = $cookies.getObject('blocChatCurrentUser');
         //     var username = cookieWObject.currentUser.name;
         //     $scope.messageData.username = username
         //     $scope.messageData.roomId = $scope.currentRoom.$id
         //     Message.send($scope.messageData)
         // }

     }
     angular
         .module('bloc_chat')
         .controller('HomeCtrl', ['$scope', 'param', HomeCtrl]);
 })();
