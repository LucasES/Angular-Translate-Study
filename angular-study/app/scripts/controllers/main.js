'use strict';

/**
 * @ngdoc function
 * @name angularStudyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStudyApp
 */
 angular.module('angularStudyApp')
 .controller('MainCtrl', function ($scope, $translate, $filter) {
 	var language = navigator.language.split('-')[0];
    $translate.use(language);

    var keys = ["one", "two", "three"];

    $scope.pageTitle = $filter('translate')('objects.' + keys[1] +'.previsao');

    
    $scope.objects = []
    angular.forEach(keys, function(value, key) {
        var object = {};
        $translate("objects." + value + ".title").then(function(translation) {
           object.title = translation;
       });
        $translate("objects." + value + ".subject").then(function(translation) {
           object.subject = translation;
       });
        this.push(object);
    }, $scope.objects);


});