(function() {

	'use strict';

	var osl = angular.module('osl');


	osl.controller('ElectionsCtrl', ElectionsCtrl);

	ElectionsCtrl.$inject = ['$scope', 'Elections'];

	function ElectionsCtrl($scope, Elections) {

		var vm = this;

		vm.elections = getItems();
		vm.doRefresh = doRefresh;


		function getItems() {
			return Elections.all();
		}

		function doRefresh() {
			vm.elections = getItems();
			$scope.$broadcast('scroll.refreshComplete');

			// TODO: Elections.all() should return a promise
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


	osl.controller('ElectionDetailCtrl', ElectionDetailCtrl);

	ElectionDetailCtrl.$inject = ['$stateParams', 'Elections'];

	function ElectionDetailCtrl($stateParams, Elections) {

		var vm = this;
		vm.election = getItem($stateParams.id);


		function getItem(id) {
			return Elections.find(id);
		}

	};

})();
