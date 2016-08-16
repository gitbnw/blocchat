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
                         $cookies.put('blocChatCurrentUser', $scope.formData)
                         callback();
                     }

                     setCookie(function() {
                         $uibModalInstance.dismiss('named');
                     });

                 }

             }
         }


     angular
     .module('bloc_chat')
     .controller('ModalCtrl', ['roomService', '$scope', '$uibModalInstance', 'modalAttr', '$cookies', ModalCtrl]);
 })();
