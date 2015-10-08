'use strict';

angular.module('myApp')
	.controller('LoginCtrl', 
		['AuthService', '$location', '$scope', function(AuthService, $location, $scope) {
	    $scope.login = function(user) {
	        AuthService
	        	.login(user.email, user.password)
	        	.then(function() {
	        		$location.path('/');
	        	}
	        );
		};
	}])
	.controller('SignupCtrl', ['AuthService', '$location', '$scope', function(AuthService, $location, $scope) { 	
	   	$scope.signup = function(user) {
	   		AuthService
	        	.signup(user.email, user.password)
	        	.then(function() {
	        		$location.path('/login');
          		}
          	);
		}; 
	}]);
