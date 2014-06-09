'use strict';

/* App Module */

var myAngularApp = angular.module('myAngularApp', [
  'ngRoute',
  'myAngularControllers',
  'myAngularFilters'
]);

myAngularApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/main-list.html',
        controller: 'MainController'
      }).
      when('/details/:phoneId', {
        templateUrl: 'partials/details-list.html',
        controller: 'DetailsController'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);
