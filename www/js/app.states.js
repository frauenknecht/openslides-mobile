(function() {
	
'use strict';

	angular
		.module('osl')
		.config(configure);
		
		
	function configure ($stateProvider, $urlRouterProvider) {
		
		$stateProvider
	
		.state('app', {
			url: '/app',
			abstract: true,
			controller: 'AppCtrl as app',
			templateUrl: 'templates/menu.html'
		})  
		
  		.state('app.projector', {
			url: '/projector',
			views: {
				'menuContent' : {
					controller: 'ProjectorCtrl',
					templateUrl: 'templates/projector.html'
				}
			}
		})
		
		.state('app.agenda', {
			url: '/agenda',
			views: {
				'menuContent' : {
					templateUrl: 'templates/agenda.html'
				}
			}
		})  
		
		.state('app.motions', {
			url: '/motions',
			views: {
				'menuContent' : {
					templateUrl: 'templates/motions.html'
				}
			}
		})
		
		.state('app.elections', {
			url: '/elections',
			views: {
				'menuContent' : {
					templateUrl: 'templates/elections.html'
				}
			}
		})

		.state('app.election.detail', {
			url: '/election/:id',
			views: {
				'menuContent' : {
					controller: 'ElectionDetailCtrl',						
					templateUrl: 'templates/election_detail.html'
				}
			}
		})

		.state('app.users', {
			url: '/users',
			views: {
				'menuContent' : {
					controller: 'UsersCtrl as vm',						
					templateUrl: 'templates/users.html'
				}
			}
		})

		.state('app.users-detail', {
			url: '/users/:id',
			views: {
				'menuContent' : {
					controller: 'UserDetailCtrl as vm',
					templateUrl: 'templates/user_detail.html'
				}
			}											
		})

		.state('app.files', {
			url: '/files',
			views: {
				'menuContent' : {
					controller: 'FilesCtrl',						
					templateUrl: 'templates/files.html'
				}
			}
		})

		.state('app.login', {
			url: '/login',
			views: {
				'menuContent' : {
					templateUrl: 'templates/login.html'
				}
			}
		})
							
		.state('app.settings', {
			url: '/settings',
			views: {
				'menuContent' : {
					controller: 'SettingsCtrl',
					templateUrl: 'templates/settings.html'
				}
			}
		})
		
		.state('app.about', {
			url: '/about',
			views: {
				'menuContent' : {
					templateUrl: 'templates/about.html'
				}
			}
		});
		
		$urlRouterProvider.otherwise('/app/login');				
	}
	
})();
		