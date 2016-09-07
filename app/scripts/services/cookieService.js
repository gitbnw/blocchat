(function() {
    function cookieService($cookies, $uibModalInstance) {

        cookieService.modalDismiss = function(){

          $uibModalInstance.dismiss('approved')

        };

        cookieService.setCookie = function(formData, callback) {
            var currentUser = formData
            var cookie = {};
            cookie.currentUser = currentUser
            cookie.currentUser.authorized = true;
            $cookies.putObject('blocChatCurrentUser', cookie)
            callback();
        }

        return cookieService;
    }
    angular
        .module('bloc_chat')
        .factory('cookieService', ['$cookies', cookieService]);
})();
