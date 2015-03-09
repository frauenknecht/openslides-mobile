angular.module('osl')

.controller('SettingsCtrl', function ($scope, Settings) {

	$scope.language = Settings.language;
	
	$scope.changeLang = function (key) {
		Settings.setLanguage(key);
  	};  
});
