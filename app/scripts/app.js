(function() {
     function config($stateProvider, $locationProvider) {
      $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
     $stateProvider
         .state('main', {
             url: '/main',
             controller: 'MainCtrl as main',
             templateUrl: './templates/main.html'
         });
     }
  angular
    .module('bloc_chat', ['ui.router', 'firebase'])
    .config(config);
})();
