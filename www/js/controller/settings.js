angular.module('osl')

.controller('SettingsCtrl', function($scope, Settings) {

	$scope.data = {};

	$scope.data.protocols = ['http', 'https'];
	$scope.data.proto_selected = Settings.protocol;

	$scope.data.server = Settings.url;
	$scope.data.port = Settings.port;
	$scope.data.language = Settings.language;

	$scope.changeLang = function(key) {
		Settings.setLanguage(key);
	};

	$scope.changeProtocol = function() {
		Settings.protcol = $scope.data.proto_selected;
	};

});
