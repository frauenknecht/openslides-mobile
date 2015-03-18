angular.module('osl')

.controller('LoginCtrl', function($scope, $ionicHistory, $ionicPopup, $state, oslAuth) {

    $scope.data = {};
 
	$scope.login = function() {
		oslAuth.login($scope.data.username, $scope.data.password);
		
		$ionicHistory.nextViewOptions({
		  disableBack: true
		});
		
		$state.go('app.projector');		

/*
			.success(function(data) {
				$state.go('app.projector');
			  
          	}).error(function(data) {
				var alertPopup = $ionicPopup.alert({
                  		title: 'Login failed!',
                  		template: 'Please check your credentials!'
              	});
          	});
*/		
	}
	
})