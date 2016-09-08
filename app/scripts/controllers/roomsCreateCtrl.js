 (function() {
     function roomsCreateCtrl($scope, $uibModalInstance, Rooms, modalProperties) {
         var $ctrl = this;
         $ctrl.modalProperties = modalProperties;

         $ctrl.ok = function() {
             $uibModalInstance.close($ctrl.selected.item);
         };

         $ctrl.cancel = function() {
             $uibModalInstance.dismiss('cancel');
         };
         angular
             .module('bloc_chat')
             .controller('roomsCreateCtrl', ['$scope', '$uibModalInstance', 'Rooms', 'modalProperties', roomsCreateCtrl]);
     }
 })();
