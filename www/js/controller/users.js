(function() {
	
'use strict';

	var osl = angular.module('osl')

	osl.controller('UsersCtrl', UsersCtrl);		

	UsersCtrl.$inject = [ '$scope',
						  '$filter', 
						  'Users' ];
		
	function UsersCtrl ($scope, $filter, Users) {		
		var vm = this;
		
		vm.letters = [];			
		vm.users = [];
		
		vm.getItemHeight = getItemHeight;
		vm.getItemWidth = getItemWidth;
		vm.scrollBottom = scrollBottom;
		vm.doRefresh = doRefresh;
		
		init();
		
		
		function init() {
			vm.users = Users.all();
		}
		
		function getItemHeight (item) {
			return '80';
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
		
		function doRefresh() {			
			vm.users = Users.all();
			$scope.$broadcast('scroll.refreshComplete');
			
			// TODO: User.all() should return a promise
			// Then impl like this:
			// 
			// .success(function(users) {
       		// 		vm.users  = users;
     		// })
     	    // .finally(function() {       
       		// 		$scope.$broadcast('scroll.refreshComplete');
     		// });			
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
		