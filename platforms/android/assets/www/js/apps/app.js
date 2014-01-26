
apps = window.apps || {};

apps.defaultApp = angular.module('defaultapp', ['ngRoute'])
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'listcontroller',
      templateUrl:'list.html'
    })
    // .when('/edit/:projectId', {
    //   controller:'EditCtrl',
    //   templateUrl:'detail.html'
    // })
    // .when('/new', {
    //   controller:'CreateCtrl',
    //   templateUrl:'detail.html'
    // })
    .otherwise({
      redirectTo:'/'
    });
})
.controller('listcontroller', function($scope) {
  $scope.cocktails = [
    { name: 'cocktailOne' },
    { name: 'cocktailTwo' },
    { name: 'cocktailThree' },
    { name: 'cocktailFour' }
  ];
});