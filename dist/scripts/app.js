(function() {

    function BlocChatCookies($cookies, $uibModal, Fixtures) {
        // var form = Fixtures.getForm('formLogin');
        var cookieWObject = $cookies.getObject('blocChatCurrentUser');
        var authorized = cookieWObject.currentUser.authorized

        if (!cookieWObject.currentUser.authorized) {
            $uibModal.open({
                templateUrl: './templates/modal.html',
                controller: 'ModalCtrl',
                backdrop: 'static',
                size: 'sm'

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
