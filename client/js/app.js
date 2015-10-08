'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'lbServices'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'js/components/home/home.view.html'
      }).
      when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'js/components/auth/login.view.html'
      }).
      when('/signup', {
        controller: 'SignupCtrl',
        templateUrl: 'js/components/auth/signup.view.html'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);