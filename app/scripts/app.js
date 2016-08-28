(function() {

    function BlocChatCookies($cookies, HomeCtrl, modalService) {
        // var form = Fixtures.getForm('formLogin');
        var cookieWObject = $cookies.getObject('blocChatCurrentUser');
        var authorized = cookieWObject.currentUser.authorized
        var userModal = {
            id: 'user',
            title: 'Login or Sign Up',
            noDismiss: true,
            tabbed: true
        };

        if (!cookieWObject.currentUser.authorized) {
            HomeCtrl.showModal(userModal);

            // $uibModal.open({
            //     templateUrl: './templates/modal.html',
            //     controller: 'ModalCtrl',
            //     backdrop: 'static',
            //     size: 'sm'
            //
            // })
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
        .run(['$cookies', 'HomeCtrl', 'modalService', BlocChatCookies]);
})();
