 (function() {
     function ModalCtrl(roomService, $scope, $uibModalInstance, modalAttr, $cookies) {


         $scope.cancel = function() {
             $uibModalInstance.dismiss('cancel');
         };

         $scope.formData = {};

         $scope.modalAttr = modalAttr;

         $scope.add = function() {

             if ($scope.modalAttr.item === "rooms") {
                 var rooms = roomService.all

                 rooms.$add($scope.formData).then(function() {
                     $uibModalInstance.dismiss('submit');
                 })
             }
             if ($scope.modalAttr.item === "user") {

                 function setCookie(callback) {
                     var currentUser = $scope.formData
                     var cookie = {};

                     cookie.currentUser = currentUser
                     $cookies.putObject('blocChatCurrentUser', cookie)
                     callback();
                 }

                 setCookie(function() {
                     $uibModalInstance.dismiss('named');

                 });

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
         .controller('ModalCtrl', ['roomService', '$scope', '$uibModalInstance', 'modalAttr', '$cookies', ModalCtrl]);
 })();
