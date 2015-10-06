var app = angular.module('starter')

app.controller('writedb',function($scope,$http){
	$scope.content="";
	$scope.wQuery = function(){
		$http.get('http://52.27.196.151:3000/wall/write?content='+$scope.content)
		.success(function(data){
			alert("work")
		})
		.error(function(err){
			alert(err)
		})
		//console.log('http://52.27.196.151:3000/wall/write?content='+$scope.content)
	}
	//$scope.writeQuery=writeQuery;
	

})

// app.controller('writedb',function($scope,ReadJsonSample){

// 	ReadJsonSample.success(function(data){
// 		$scope.query=data;
// 	})
	
// 	//$scope.query=data;

// 	$scope.test = function(){
// 		console.log($scope.query)
// 	}
	
// })