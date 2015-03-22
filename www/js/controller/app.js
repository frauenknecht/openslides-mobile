(function() {
	
'use strict';

	angular
		.module('osl')
		.controller('AppCtrl', AppCtrl);
		
	AppCtrl.$inject = [	'$scope',
						'$state', 
						'$ionicPopup', 
						'$ionicHistory', 
						'Settings', 
						'oslAuth' ];
		
	function AppCtrl ($scope, $state, $ionicPopup, $ionicHistory, Settings, oslAuth) {
		
		var vm = this;
		
	    vm.authenticated = false;
		vm.username = '';
		vm.password = '';	
	
		vm.login = login;
		vm.logout = logout;
							
		oslAuth.initialize(
			Settings.protocol + '://' + 
			Settings.url + ':' + 
			Settings.port

		).then(function(data) {
			vm.authenticated = true;
		
		}, function(data) {
			vm.authenticated = false;		
		});

		$scope.$on('auth.logged_in', function() {
  	  	  vm.authenticated = true;
		});
	
    	$scope.$on('auth.logged_out', function() {
      	  vm.authenticated = false;
    	});
	
		function login () {
			
			$ionicHistory.nextViewOptions({
		  	  disableBack: true
			});
		
			oslAuth.login(vm.username, vm.password)
			
			.then(function(data) {
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
		
		function logout () {
			
			oslAuth.logout();		

			$ionicHistory.nextViewOptions({
	  	  	  disableBack: true
			});
	
			$state.go('app.login');				
		}		
	}
	
})();
