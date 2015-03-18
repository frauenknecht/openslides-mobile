angular.module('osl')

.controller('AppCtrl', function($scope, $location, oslAuth, Settings) {
	
    $scope.authenticated = false;

	oslAuth.initialize(
		Settings.protocol + '://' + 
		Settings.url + ':' + 
		Settings.port
	);
	
//	.then(function(){
//        $scope.authenticated = true;
//    });
	
//    oslAuth.status(true).then(function(){
//        $scope.authenticated = true;
//    });

	$scope.$on('auth.logged_in', function() {
  	  $scope.authenticated = true;
	});
	
    $scope.$on('auth.logged_out', function() {
      $scope.authenticated = false;
    });

})
