// Declare app level module which depends on filters, and services
angular.module('cryptopia', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html', 
        controller: 'HomeController'}
      )
      .when('/profile', {
        templateUrl: 'views/profile/profile.html', 
        controller: 'ProfileController'})
      .otherwise({redirectTo: '/'});
  }]);
