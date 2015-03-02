angular.module('osl')

.controller('SettingsCtrl', function ($scope, $translate, Settings) {
	$scope.settings = Settings;
	
	$scope.changeLang = function (key) {
		$translate.use(key).then(function (key) {
			console.log("Sprache zu " + key + " gewechselt.");						
		}, function (key) {
			console.log("Irgendwas lief schief.");	
		});
  	};  
});
