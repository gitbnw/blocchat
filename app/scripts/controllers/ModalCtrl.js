 (function() {
         function ModalCtrl(roomService, $scope, $uibModalInstance) {

             $scope.cancel = function() {
                 $uibModalInstance.dismiss('cancel');
             };

             $scope.formData = {};

             $scope.submit = function() {
                 var ref = firebase.database().ref().child("rooms");
                 var rooms = roomService.all
                 rooms.$add($scope.formData).then(function() {
                         $uibModalInstance.dismiss('submit');
                     })
                 }

             }

             angular
                 .module('bloc_chat')
                 .controller('ModalCtrl', ['roomService', '$scope', '$uibModalInstance', ModalCtrl]);
         })();
