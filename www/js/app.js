(function() {
	
'use strict';

angular.module('osl', [	'ionic', 
						'ngCookies',
						'pascalprecht.translate'] )

	.run(function($ionicPlatform, oslAuth, Settings) {
  		$ionicPlatform.ready(function() {
    		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    		// for form inputs)
    		if(window.cordova && window.cordova.plugins.Keyboard) {
      			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    		}
    		if(window.StatusBar) {
      			StatusBar.styleDefault();
    		}		
  		});
	})
		
	
	.factory('WebSocket', function (socketFactory) {
		return socketFactory({
			url: 'http://de.demo.openslides.org/projector/socket'
		});
	});

})();
