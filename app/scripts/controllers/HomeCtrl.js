 (function() {
         function HomeCtrl($scope, modalService, param) {

             $scope.master = {};

             $scope.reset = function() {
                 $scope.formData = angular.copy($scope.master);
             };

             $scope.currentModal = modalService.setCurrentModal(param.modalObj);

             $scope.getFieldTemplateUrl = function(field) {
                 return './templates/fields/' + field.dataType + '.html';
             };

             $scope.onClickTab = function(tab) {
                 $scope.currentModal.currentTab = modalService.getCurrentTab(param.modalObj, tab.id);
                 $scope.currentModal.currentForm = modalService.setCurrentForm($scope.currentModal.currentTab.form);
                 $scope.reset();
                 //
             }

             var login = function() {
                 console.log('login call')
                 var currentUser = $scope.formData
                 firebase.auth().signInWithEmailAndPassword($scope.formData.email, $scope.formData.password).then(function(data) {
                     console.log(data)
                 }).catch(function(error) {
                         // Handle Errors here.
                         var errorCode = error.code;
                         var errorMessage = error.message;
                         console.log(error)
                             // ...
                     };
                 }
                 angular
                     .module('bloc_chat')
                     .controller('HomeCtrl', ['$scope', 'modalService', 'param', HomeCtrl]);
             })();
