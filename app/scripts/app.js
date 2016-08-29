(function() {

    function BlocChatCookies($cookies, modalService, Fixtures) {
        // var form = Fixtures.getForm('formLogin');

        var cookieWObject = $cookies.getObject('blocChatCurrentUser');

        var loginTab = {
            form: Fixtures.getForm('formLogin'),
            default: true
        };

        var signupTab = {
            form: Fixtures.getForm('formSignUp'),
            default: false
        };

        var userModal = {
            id: 'user',
            controller: 'HomeCtrl',
            noDismiss: true,
            tabbed: true,
            tabs: {
                login: loginTab,
                signup: signupTab
            }
        };

        if (!cookieWObject || !cookieWObject.currentUser.authorized) {

            modalService.showModal(userModal);

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
        .run(['$cookies', 'modalService', 'Fixtures', BlocChatCookies]);
})();
