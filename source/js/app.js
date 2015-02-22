"use strict";

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'templates/homepage.html',
        controller: 'homepageCtrl'
    })
    .when('/services', {
        templateUrl:'templates/services.html',
    })
    .otherwise({
        redirectTo: '/'
    });
});