(function() {

	'use strict';

	var osl = angular.module('osl')

	osl.controller('FilesCtrl', FilesCtrl);

	FilesCtrl.$inject = ['$scope',
		'$filter',
		'Files'
	];

	function FilesCtrl($scope, $filter, Files) {
		var vm = this;

		vm.columns = [];
		vm.files = [];

		vm.getItemHeight = getItemHeight;
		vm.getItemWidth = getItemWidth;
		vm.scrollBottom = scrollBottom;
		vm.doRefresh = doRefresh;

		init();


		function init() {
			vm.columns = Files.columns()
			vm.files = Files.all();
		}

		function getItemHeight(item) {
			return '80';
		}

		function getItemWidth() {
			return '100%';
		}

		function scrollTop() {
			$ionicScrollDelegate.scrollTop(true);
		}

		function scrollBottom() {
			$ionicScrollDelegate.scrollBottom(true);
		}

		function doRefresh() {
			vm.files = Files.all();
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


	osl.controller('FileDetailCtrl', FileDetailCtrl);
	FileDetailCtrl.$inject = ['$stateParams',
		'Files'
	];

	function FileDetailCtrl($stateParams, Users) {
		var vm = this;
		vm.user = Files.find($stateParams.id);
	};

})();
