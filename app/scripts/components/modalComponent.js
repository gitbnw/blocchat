(function() {
    var modalComponent = {
        templateUrl: 'templates/modal.html',
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: function() {
            var $ctrl = this;

            $ctrl.$onInit = function() {
                $ctrl.modal = $ctrl.resolve.modalProps;
            };

            $ctrl.ok = function() {
                // $ctrl.close({ $value: $ctrl.selected.item });
            };

            $ctrl.cancel = function() {
                $ctrl.dismiss({ $value: 'cancel' });
            };

            $ctrl.getFieldTemplateUrl = function(field) {
                return '/templates/fields/' + field.dataType + '.html';
            };

            $ctrl.createRoom = function() {
                console.log('createRoom')
            };

            $ctrl.formData = {};
        }

    }
    angular
        .module('bloc_chat')
        .component('modalComponent', modalComponent);
})();
