(function() {
	
'use strict';

	var osl = angular.module('osl')

	osl.controller('UsersCtrl', UsersCtrl);		

	UsersCtrl.$inject = [ '$filter', 
						  'Users' ];
		
	function UsersCtrl ($filter, Users) {		
		var vm = this;
		
		vm.letters = [];			
		vm.users = [];
		
		vm.getItemHeight = getItemHeight;
		vm.getItemWidth = getItemWidth;
		vm.scrollBottom = scrollBottom;
		
		init();
		
		
		function init() {
			vm.users = Users.all();
		}
		
		function getItemHeight (item) {
			return item.isLetter ? 40 : 100;
		}	
		
		function getItemWidth () {
			return '100%';
		}	

		function scrollTop () {
			$ionicScrollDelegate.scrollTop(true);
		}	
		
		function scrollBottom () {
			$ionicScrollDelegate.scrollBottom(true);
		}	
		
	};
	
	
	osl.controller('UserDetailCtrl', UserDetailCtrl);		
	UserDetailCtrl.$inject = [ '$stateParams',
							   'Users' ];

	function UserDetailCtrl ($stateParams, Users) {		
		var vm = this;			
		vm.user = Users.find($stateParams.id);	
	};
							
})();		
		