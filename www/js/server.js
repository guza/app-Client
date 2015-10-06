var app = angular.module('starter')

app.factory('writeQuery',function($scope,$http){
	return $http.get('http://52.27.196.151:3000/wall/write?'+$scope.content)
	.success(function(data){
		alert("work")
	})
	.error(function(err){
		alert(err)
	})
	//http://52.27.196.151:3000/wall/write?content=12
})

// app.factory('ReadJsonSample',function($http){
// 		return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 

// 		.success(function(data){
// 			return data;
// 		})
// 		.error(function(err){
// 			return err;
// 		});

// });