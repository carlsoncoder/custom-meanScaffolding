'use strict';

/* Controllers */

var myAngularControllers = angular.module('myAngularControllers', []);

myAngularControllers.controller('MainController', ['$scope', '$http',
  function($scope, $http) {
	$http.get('/api/mainRecords')
		.success(function(data) {
			$scope.records = data;
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
		
	$scope.orderProp = 'age';
  }]);

  myAngularControllers.controller('DetailsController', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http)
  {
      $http.get('/api/details/' + $routeParams.phoneId)
		.success(function (data)
		{
		    $scope.details = data;
		    $scope.mainImageUrl = data.images[0];
		})
		.error(function (data)
		{
		    console.log('Error: ' + data);
		});

      $scope.setImage = function (imageUrl)
      {
          $scope.mainImageUrl = imageUrl;
      };

      $scope.justinCustomFunction = function (obj)
      {
          alert('Hello, ' + (obj || 'world') + '!');
      };
  } ]);