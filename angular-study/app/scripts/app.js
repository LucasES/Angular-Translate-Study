'use strict';

/**
 * @ngdoc overview
 * @name angularStudyApp
 * @description
 * # angularStudyApp
 *
 * Main module of the application.
 */
 angular
 .module('angularStudyApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch',
  'pascalprecht.translate',
  'chart.js'
  ])
 .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .state('chart', {
    url: '/chart',
    templateUrl: 'views/chart.html',
    controller: 'ChartCtrl',
    controllerAs: 'chart'
  });

  $translateProvider.useStaticFilesLoader({
    prefix: '/languages/',
    suffix: '.json'
  });

  var language = navigator.language.split('-')[0];

  $translateProvider.preferredLanguage('pt');

  // $translateProvider.fallbackLanguage('en')
   $translateProvider.useSanitizeValueStrategy('escapeParameters');

  //$translateProvider.useLocalStorage();
});
