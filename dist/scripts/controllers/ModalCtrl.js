 (function() {
     function ModalCtrl(roomService, $scope, $uibModalInstance, Fixtures, $cookies) {
         $scope.cancel = function() {
             $uibModalInstance.dismiss('cancel');
         };


         $scope.formData = {};
         // $scope.formData.model = {};
         // $scope.modalAttr = modalAttr;

         var setCookie = function(callback) {
             var currentUser = $scope.formData
             var cookie = {};
             cookie.currentUser = currentUser
             cookie.currentUser.authorized = true;
             $cookies.putObject('blocChatCurrentUser', cookie)
             callback();
         }

         var login = function() {
             console.log('login call')
             var currentUser = $scope.formData
             firebase.auth().signInWithEmailAndPassword($scope.formData.email, $scope.formData.password).then(function(data) {
                 setCookie(function() {
                     $uibModalInstance.dismiss('authorized');
                 });
             }).catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 console.log(error)
                     // ...
             });

         };

         var signup = function() {

             if ($scope.formData.password === $scope.formData.cpassword) {

                 firebase.auth().createUserWithEmailAndPassword($scope.formData.email, $scope.formData.password).then(function(data) {
                     login();
                 }).catch(function(error) {
                     // Handle Errors here.
                     var errorCode = error.code;
                     var errorMessage = error.message;
                     if (errorCode == 'auth/weak-password') {
                         alert('The password is too weak.');
                     } else {
                         alert(errorMessage);
                     }
                     console.log(error);

                     // ...
                 });



             }

         }

         $scope.getTab = function(id) {

             var selTab = $scope.tabs.filter(function(selTab) {
                 console.log(selTab.id === id)
                 return selTab.id === id;
             })[0];

             return selTab;

         }

         $scope.getFieldTemplateUrl = function(field) {
             return '/templates/fields/' + field.dataType + '.html';
         };

         $scope.tabs = [{
             id: 'login',
             title: 'Login',
             form: Fixtures.getForm('formLogin'),
             submit: login,
             noDismiss: true
         }, {
             id: 'signup',
             title: 'Sign up',
             form: Fixtures.getForm('formSignUp'),
             submit: signup,
             noDismiss: true
         }];



         $scope.currentModal = $scope.tabs[0];

         $scope.master = {};

         $scope.reset = function() {
             $scope.formData = angular.copy($scope.master);
         };

         $scope.onClickTab = function(tab) {
             $scope.currentModal = $scope.getTab(tab.id);
             $scope.reset();
             //
         }
         $scope.isActiveTab = function(id) {
             return id == $scope.currentModal.id;
         }

     }
     angular
         .module('bloc_chat')
         .controller('ModalCtrl', ['roomService', '$scope', '$uibModalInstance', 'Fixtures', '$cookies', ModalCtrl]);
 })();
