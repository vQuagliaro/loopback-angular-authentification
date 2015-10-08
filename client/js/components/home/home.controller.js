'use strict';

angular.module('myApp').controller('HomeCtrl', 
	['AuthService', '$location', '$scope', function(AuthService, $location, $scope) {
    if (!AuthService.isLoggedIn()) {
    	$location.path('/login');
    } else {
	    $scope.user = {
	    	email: AuthService.currentUser().email
	    };	
    }
}]);
