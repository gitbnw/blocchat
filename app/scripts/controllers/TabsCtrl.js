 (function() {
     function TabsCtrl($scope, $uibModalInstance, modalAttr, $cookies) {

    $scope.tabs = [{
            title: 'Login',
            // url: 'one.tpl.html'
        }, {
            title: 'Sign up',
            // url: 'two.tpl.html'
        }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.title;
    }

    $scope.isActiveTab = function(tabTitle) {
        return tabTitle == $scope.currentTab;
    }


     }


     angular
         .module('bloc_chat')
         .controller('TabsCtrl', ['$scope', '$uibModalInstance', 'modalAttr', '$cookies', TabsCtrl]);
 })();
