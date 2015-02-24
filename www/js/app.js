
angular.module('osl', [	'ionic', 
						'pascalprecht.translate'] )

	.run(function($ionicPlatform) {
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
	
	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('app', {
				url: '/app',
				abstract: true,
				templateUrl: 'templates/menu.html'
    		})  
			
      		.state('app.projector', {
				url: "/projector",
				views: {
					'menuContent' : {
						templateUrl: "templates/projector.html"
					}
				}
			})
			
			.state('app.agenda', {
				url: "/agenda",
				views: {
					'menuContent' : {
						templateUrl: "templates/agenda.html"
					}
				}
			})  
			
			.state('app.motions', {
				url: "/motions",
				views: {
					'menuContent' : {
						templateUrl: "templates/motions.html"
					}
				}
			})
			
			.state('app.elections', {
				url: "/elections",
				views: {
					'menuContent' : {
						templateUrl: "templates/elections.html"
					}
				}
			})

			.state('app.participants', {
				url: "/participants",
				views: {
					'menuContent' : {
						templateUrl: "templates/participants.html"
					}
				}
			})

			.state('app.files', {
				url: "/files",
				views: {
					'menuContent' : {
						templateUrl: "templates/files.html",
					}
				}
			})
			
			.state('app.settings', {
				url: "/settings",
				views: {
					'menuContent' : {
						controller: 'SettingsCtrl',
						templateUrl: "templates/settings.html"
					}
				}
			});
			

  		$urlRouterProvider.otherwise('/app/files');		
	})
	
	.factory('Settings', function () {
		var Settings = {
	    	language: 'en_US'
	  	};
	  	return Settings;
	});
			