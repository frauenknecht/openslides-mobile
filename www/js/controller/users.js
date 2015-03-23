(function() {
	
'use strict';

	var osl = angular.module('osl')

	osl.controller('UsersCtrl', UsersCtrl);		
	UsersCtrl.$inject = [ 'Users' ];
		
	function UsersCtrl (Users) {		
		var vm = this;			
		vm.users = Users.all();			
	};
	
	
	osl.controller('UserDetailCtrl', UserDetailCtrl);		
	UserDetailCtrl.$inject = [ '$stateParams',
							   'Users' ];

	function UserDetailCtrl ($stateParams, Users) {		
		var vm = this;			
		vm.user = Users.find($stateParams.id);	
	};
							
})();		
		