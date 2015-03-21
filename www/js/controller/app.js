angular.module('osl')

.controller('AppCtrl', function($scope, $state, $ionicPopup, $ionicHistory, Settings, oslAuth) {
	
	$scope.data = {
	    authenticated: false,
		username: '',
		password: ''		
	};
	
	oslAuth.initialize(
		Settings.protocol + '://' + 
		Settings.url + ':' + 
		Settings.port

	).then(function(data) {
		$scope.data.authenticated = true;
		
	}, function(data) {
		$scope.data.authenticated = false;		
	});
	
	$scope.login = function() {
		
		$ionicHistory.nextViewOptions({
		  disableBack: true
		});
		
		oslAuth.login(
			$scope.data.username, 
			$scope.data.password
		
		).then(function(data) {
			$state.go('app.projector');
			  
        }, function(data) {
			if (data.non_field_errors) {
				var alert = $ionicPopup.alert({
					title: 'Login failed!',
					template: data.non_field_errors
		 		});
			}        	
        });				
	}
		
	$scope.logout = function() {
		oslAuth.logout();		

		$ionicHistory.nextViewOptions({
	  	  disableBack: true
		});
	
		$state.go('app.login');				
	}	
	
	$scope.$on('auth.logged_in', function() {
  	  $scope.data.authenticated = true;
	});
	
    $scope.$on('auth.logged_out', function() {
      $scope.data.authenticated = false;
    });

})
