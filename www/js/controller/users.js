angular.module('osl')



.controller('UsersCtrl', function ($scope, $state, Users) {	
	$scope.users = users;
})


.controller('UserDetailCtrl', function ($scope, $stateParams, Users) {
	$scope.user = Users.find($stateParams.id);
});

