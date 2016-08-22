 (function() {
     function ModalCtrl(roomService, $scope, $uibModalInstance, modalAttr, Fixtures, $cookies) {


         $scope.cancel = function() {
             $uibModalInstance.dismiss('cancel');
         };

         $scope.formData = {};
         // $scope.formData.model = {};

         $scope.modalAttr = modalAttr;

         $scope.login = function() {
             // firebase.auth().createUserWithEmailAndPassword($scope.formData.email, $scope.formData.password).catch(function(error) {
             //     // Handle Errors here.
             //     var errorCode = error.code;
             //     var errorMessage = error.message;
             //     // ...
             // });
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


         console.log(modalAttr.form.submit);

         $scope.submit = $scope.login;

         $scope.getFieldTemplateUrl = function(field) {
             return '/templates/fields/' + field.dataType + '.html';
         };





         $scope.add = function() {

             if ($scope.modalAttr.item === "rooms") {
                 var rooms = roomService.all

                 rooms.$add($scope.formData).then(function() {
                     $uibModalInstance.dismiss('submit');
                 })
             }

         }

         $scope.tabs = [{
             title: 'Login',
             inputLbl: 'username',
             pholder: 'username',
             inputType: 'text'
                 // url: 'one.tpl.html'
         }, {
             title: 'Sign up',
             inputLbl: 'email',
             pholder: 'email',
             inputType: 'email'
                 // url: 'two.tpl.html'
         }];

         $scope.currentTab = 'Login';

         $scope.onClickTab = function(tab) {
             $scope.currentTab = tab.title;
             $scope.modalAttr = tab
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
