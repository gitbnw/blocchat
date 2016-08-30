(function() {

    function chatCookies($cookies, modalService, Fixtures) {

        var cookieWObject = $cookies.getObject('chatCurrentUser');

        var loginTab = {
            form: Fixtures.getForm('formLogin'),
            id: 'loginTab',
            title: 'Login',
            default: true
        }

        var signupTab = {
            form: Fixtures.getForm('formSignUp'),
            id: 'signupTab',
            title: 'Sign Up',
            default: false
        }

        var userModal = {
            id: 'user',
            controller: 'HomeCtrl',
            noDismiss: true,
            tabbed: true,
            tabs: [
                loginTab,
                signupTab
            ]
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
        .run(['$cookies', 'modalService', 'Fixtures', chatCookies]);
})();
