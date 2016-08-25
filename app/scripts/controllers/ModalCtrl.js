 (function() {
     function ModalCtrl(roomService, $scope, $uibModalInstance, modalAttr, Fixtures, $cookies) {
         $scope.cancel = function() {
             $uibModalInstance.dismiss('cancel');
         };
         $scope.formData = {};
         // $scope.formData.model = {};
         $scope.modalAttr = modalAttr;

         var login = function() {

             var currentUser = $scope.formData
             firebase.auth().signInWithEmailAndPassword($scope.formData.email, $scope.formData.password).catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 console.log(error.message)
                     // ...
             });

             if (!currentUser || !currentUser.authorized) {

             }

             function setCookie(callback) {
                 var currentUser = $scope.formData
                 var cookie = {};
                 cookie.currentUser = currentUser
                 cookie.currentUser.authorized = true;
                 $cookies.putObject('blocChatCurrentUser', cookie)
                 callback();
             }
             setCookie(function() {
                 $uibModalInstance.dismiss('authorized');
             });
         };

         var signup = function() {

             if ($scope.formData.password === $scope.formData.cpassword) {

                 firebase.auth().createUserWithEmailAndPassword($scope.formData.email, $scope.formData.password).catch(function(error) {
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

                 login();


             }


         }

         $scope.submit = $scope.login;

         $scope.getFieldTemplateUrl = function(field) {
             return '/templates/fields/' + field.dataType + '.html';
         };

         $scope.tabs = [{
             title: 'Login',
             form: Fixtures.getForm('formLogin'),
             submit: login
         }, {
             title: 'Sign up',
             form: Fixtures.getForm('formSignUp'),
             submit: signup
         }];
         $scope.currentTab = 'Login';

         $scope.onClickTab = function(tab) {
             $scope.currentTab = tab.title;
             $scope.submit = tab.submit
                 //
         }
         $scope.isActiveTab = function(tabTitle) {
             return tabTitle == $scope.currentTab;
         }
     }
     angular
         .module('bloc_chat')
         .controller('ModalCtrl', ['roomService', '$scope', '$uibModalInstance', 'modalAttr', 'Fixtures', '$cookies', ModalCtrl]);
 })();
