 (function() {
     function HomeCtrl($scope, modalService, cookieService, roomService, Fixtures) {

         $scope.master = {};
         $scope.formData = {};

         this.rooms = roomService.all;


         if (modalService.modalObj) {
             $scope.currentModal = modalService.setCurrentModal(modalService.modalObj);
             console.log($scope.currentModal)
         }

         var login = function(formData) {
             var currentUser = formData
             firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then(function(data) {

                 cookieService.setCookie(formData, function() {

                     cookieService.modalDismiss('authorized');

                 });

             }).catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 console.log(error)
                     // ...
             });
         }
         var createRoom = function() {
             roomService.addRoom($scope.formData)
             modalService.dismiss('room added')
         }

         $scope.submit = {
             "login": login,
             "createRoom": createRoom
         }


         $scope.reset = function() {
             $scope.formData = angular.copy($scope.master);
         };


         $scope.getFieldTemplateUrl = function(field) {
             return './templates/fields/' + field.dataType + '.html';
         };

         $scope.onClickTab = function(tab) {
             $scope.currentModal.currentTab = modalService.setCurrentTab(modalService.modalObj, tab.id);
             $scope.currentModal.currentForm = modalService.setCurrentForm($scope.currentModal.currentTab.form);
             $scope.reset();
             //
         }

         $scope.isActiveTab = function(id) {
             return id == $scope.currentModal.currentTab.id;
         }

         var roomModal = {
             id: 'room',
             controller: 'HomeCtrl',
             noDismiss: false,
             tabbed: false,
             form: Fixtures.getForm('formCreateRoom')
         };

         this.newRoom = function() {
             $scope.currentModal = {}
             modalService.showModal(roomModal);
         }

     }
     angular
         .module('bloc_chat')
         .controller('HomeCtrl', ['$scope', 'modalService', 'cookieService', 'roomService', 'Fixtures', HomeCtrl]);
 })();
