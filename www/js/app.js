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
		
	.factory('Settings', function ($translate) {
				
	    var Settings = {
			
			language: 'de',
			url: '127.0.0.1',
			port: 8000,  
			protocol: 'http',
			
			setLanguage: function(key) {
			  $translate.use(key).then(function (key) {
				  Settings.language = key;
				  localStorage.setItem('settings.language', Settings.language);
				  console.log("Sprache zu " + key + " gewechselt.");						
			  }, function (key) {
				  console.log("Irgendwas lief schief.");	
			  });
		  }
	  	};
		
	    try {
			lang_key = localStorage.getItem('settings.language') || '';
			console.log("lng: " + lang_key);
			if (lang_key) {
				Settings.language = lang_key;
				Settings.setLanguage(lang_key);				
			}
				
	    } catch (e) {
			console.log("Lang: " + e);	
	    }
		
	  	return Settings;
	})
	
	.factory('Users', ['$http', function ($http) {
	
		var users = [
	    	{
	         	id				: "1",
	         	is_present		: true,
				title			: "",
				first_name		: "Ashok",
				last_name		: "Kumar",
				structure_level	: "Indien",
				about_me		: "",
				comment			: "",
				groups			: "Delegierte/r"
	    	},

			{
	         	id				: "2",
	         	is_present		: false,
				title			: "",
				first_name		: "Bob",
				last_name		: "Smith",
				structure_level	: "Neuseeeland",
				about_me		: "",
				comment			: "",
				groups			: ""
			}
		];
	
	  	return {
		
			all : function() {
				return users;			
			},
		
			find : function(id) {
				for(i=0; i<users.length; i++){
					if(users[i].id == id){
						return users[i];
					}	
				}
			}  		
	  	}

	}])
	
	.factory('WebSocket', function (socketFactory) {
		return socketFactory({
			url: 'http://de.demo.openslides.org/projector/socket'
		});
	});

})();
