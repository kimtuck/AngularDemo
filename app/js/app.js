'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/HelloWorld', {templateUrl: 'html/HelloWorld.html', controller: 'HelloWorld'});
    $routeProvider.when('/ToDo', {templateUrl: 'html/ToDo.html', controller: 'ToDo'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
