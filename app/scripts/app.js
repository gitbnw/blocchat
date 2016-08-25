(function() {

    function BlocChatCookies($cookies, $uibModal, Fixtures) {
        // var form = Fixtures.getForm('formLogin');
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || !currentUser.authorized) {

            $uibModal.open({
                templateUrl: './templates/modal.html',
                controller: 'ModalCtrl',
                backdrop: 'static',
                size: 'sm'
                // resolve: {
                //     modalAttr: function() {
                //         return activeTab;
                //     }
                // }
            })
        }
    }

    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: './templates/home.html'
            });
    }
    angular
        .module('bloc_chat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', 'Fixtures', BlocChatCookies]);
})();
