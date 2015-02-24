"use strict";

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'templates/home.html'
    })
    .when('/work', {
        templateUrl:'templates/work.html'
    })
    .when('/services', {
        templateUrl:'templates/services.html'
    })
    .when('/about', {
        templateUrl:'templates/about.html'
    })
    .when('/blog', {
        templateUrl:'templates/blog.html'
    })
    .when('/contact', {
        templateUrl:'templates/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});