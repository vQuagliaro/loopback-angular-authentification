'use strict';

angular.module('myApp')
	.factory('AuthService', ['User', '$rootScope', function(User, $rootScope) {
  		var currentUser = null;

		return {
		    login: login,
		    logout: logout,
		    signup: signup,
		    isLoggedIn: function() { return currentUser != null; },
		    currentUser: function() { return currentUser; }
		};

		function login(email, password) {
			return User.login({email: email, password: password})
		        .$promise
		        .then(function(response) {
			        currentUser = {
			        	id: response.user.id,
			        	tokenId: response.id,
			        	email: email
			        };
		        });	
		}

		function signup(email, password) {
			return User.create({ email: email, password: password})
				.$promise;
		}

		function logout() {
			currentUser = null;
		}
}]);
