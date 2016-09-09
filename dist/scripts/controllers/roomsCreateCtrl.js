 (function() {
     function roomsCreateCtrl($scope, $uibModalInstance, Rooms, items) {
         var $ctrl = this;
         $ctrl.items = items;

         $ctrl.ok = function() {
             $uibModalInstance.close($ctrl.selected.item);
         };

         $ctrl.cancel = function() {
             $uibModalInstance.dismiss('cancel');
         };
         angular
             .module('bloc_chat')
             .controller('roomsCreateCtrl', ['$scope', '$uibModalInstance', 'Rooms', 'items', roomsCreateCtrl]);
     }
 })();
