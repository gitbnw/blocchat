(function() {
    var modalComponent =  {
            templateUrl: 'templates/modal.html',
            bindings: {
                resolve: '<',
                close: '&',
                dismiss: '&'
            },
            controller: function() {
                var $ctrl = this;

                $ctrl.$onInit = function() {
                    console.log($ctrl.resolve)
                    $ctrl.modalProps = $ctrl.resolve.modalProps;
                    // $ctrl.selected = {
                    //     item: $ctrl.items[0]
                    // };
                };

                $ctrl.ok = function() {
                    // $ctrl.close({ $value: $ctrl.selected.item });
                };

                $ctrl.cancel = function() {
                    $ctrl.dismiss({ $value: 'cancel' });
                };
            }

    }
    angular
        .module('bloc_chat')
        .component('modalComponent', modalComponent);

})();
