(function() {

	'use strict';

	var osl = angular.module('osl')

	osl.controller('FilesCtrl', FilesCtrl);

	FilesCtrl.$inject = ['$scope',
		'$filter',
		'$cordovaInAppBrowser',
		'Files'
	];

	function FilesCtrl($scope, $filter, $cordovaInAppBrowser, Files) {
		var vm = this;

		var browser_options = {
			location: 'no',
			clearcache: 'yes',
			toolbar: 'yes',
			closebuttoncaption: 'DONE?'
		};
		
		vm.columns = [];
		vm.files = [];

		vm.getItemHeight = getItemHeight;
		vm.getItemWidth = getItemWidth;
		vm.scrollBottom = scrollBottom;
		vm.doRefresh = doRefresh;
		vm.openUrl = openUrl;

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
		
		function openUrl(url) {						
			$cordovaInAppBrowser.open(url, '_system', browser_options)
				.then(function(event) {
			          // success
			    })
				.catch(function(event) {
			          // error
				});			
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
