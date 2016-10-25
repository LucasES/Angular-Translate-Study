'use strict';

/**
 * @ngdoc function
 * @name angularStudyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStudyApp
 */
 angular.module('angularStudyApp')
 .controller('AboutCtrl', function ($scope, $http, myService, myFactory) {
 	
 	$scope.contatos = {};
 	$scope.carregarContatos = function () {
 		$http.get("http://localhost:3412/contatos").success(function (data) {
 			$scope.contatos = data;
 		}).error(function (data, status) {
 			$scope.message = "Aconteceu um problema: " + data;
 		});
 	};

 	$scope.clear = function () {
 		delete $scope.contatos;
 	};
 	myFactory.setMSG("Tutlane (with Factory)");
 	myService.setMSG("Tutlane (with Service)");

 	$scope.myCollections = [
 	myFactory.getMSG(),
 	myService.getMSG()
 	];
 })

 .factory('myFactory', function(){
 	var displayFact;

 	var addMSG = function(msg) {
 		displayFact = "Hi Guest, welcome to " + msg;
 	}

 	return {
 		setMSG: function(msg){
 			addMSG(msg);
 		},
 		getMSG: function() {
 			return displayFact;
 		}
 	};
 })

 .service('myService', function(){
 	var displayServ;
 	var addMSG = function(msg){
 		displayServ = 'Hi Guest, Welcome to ' + msg;
 	}

 	this.setMSG = function (msg) {
 		addMSG(msg);
 	}
 	this.getMSG = function() {
 		return displayServ;
 	}
 });
