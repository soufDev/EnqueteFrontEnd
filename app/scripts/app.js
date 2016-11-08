'use strict';

/**
 * @ngdoc overview
 * @name enqueteSatisfactionApp
 * @description
 * # enqueteSatisfactionApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('enqueteSatisfactionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('url', 'http://localhost:8000/');

myApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
  }).otherwise({
    redirectTo: '/'
  });
});

/*

 all( function(req, res, next) {
 res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
 res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 if ('OPTIONS' == req.method) {
 res.sendStatus(200);
 } else {
 next();
 }
 });

 */


/*
 * html2canvas($('#printForm'), {
 onrendered: function (canvas) {
 var imgData = canvas.toDataURL('image/png');
 var doc = new jsPDF('p', 'mm');
 doc.addImage(imgData, 10, 10);
 doc.save('enquete-satisfaction.pdf');
 }
 })*/
