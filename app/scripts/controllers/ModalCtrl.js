 (function() {
     function ModalCtrl(roomService, $scope, $uibModalInstance, Fixtures, $cookies) {
         $scope.cancel = function() {
             $uibModalInstance.dismiss('cancel');
         };


         $scope.formData = {};
         // $scope.formData.model = {};

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
                 console.log(data)
                 setCookie(function() {
                     $uibModalInstance.dismiss('authorized');
                 });
             }).catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 $scope.feedback = errorMessage
                 console.log(error)
                     // ...
             });

             // function setCookie(callback) {
             //     var currentUser = $scope.formData
             //     var cookie = {};
             //     cookie.currentUser = currentUser
             //     cookie.currentUser.authorized = true;
             //     $cookies.putObject('blocChatCurrentUser', cookie)
             //     callback();
             // }

         };

         var signup = function() {

             if ($scope.formData.password === $scope.formData.cpassword) {
                 $scope.feedback = "hey bro, passwords don't match"
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

         $scope.getUserTab = function(id) {

             var selTab = modals.user.content.filter(function(selTab) {
                 console.log(selTab.id === id)
                 return selTab.id === id;
             })[0];

             return selTab;

         }

         $scope.getFieldTemplateUrl = function(field) {
             return '/templates/fields/' + field.dataType + '.html';
         };

         var modals = {
             user: {
                 tabbed: true,
                 content: {
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
                 }
             },
             room: {
                 tabbed: false,

                 content: {
                     id: 'room',
                     title: 'Create room',
                     form: Fixtures.getForm('formCreateRoom'),
                     submit: login,
                     noDismiss: false
                 },

             }
         }

         $scope.modal = modals.user
         $scope.id = 'login'

         $scope.currentTab = modals.user.content[0]



         $scope.master = {};

         $scope.reset = function() {
             $scope.formData = angular.copy($scope.master);
         };

         $scope.onClickTab = function(tab) {
             $scope.currentTab = $scope.getUserTab(tab.id);
             $scope.reset();
         }
         $scope.isActiveTab = function(id) {
            console.log($scope.currentTab.id)
             return id == $scope.currentTab.id;
         }





     }
     angular
         .module('bloc_chat')
         .controller('ModalCtrl', ['roomService', '$scope', '$uibModalInstance', 'Fixtures', '$cookies', ModalCtrl]);
 })();
