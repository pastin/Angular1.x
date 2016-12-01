'use strict';


// Declare app level module which depends on filters, and services
var login = angular.module('login', ['login.filters', 'login.services', 'login.directives']);
login.
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: loginCtrl});
    $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/login'});
  }]);
