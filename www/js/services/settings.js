(function() {

	'use strict';

	angular
		.module('osl')
		.factory('Settings', Settings);

	Settings.$inject = ['$translate'];

	function Settings($translate) {

		var service = {
			language: 'de',
			url: '127.0.0.1',
			port: 8000,
			protocol: 'http',
			setLanguage: setLanguage
		}

		try {
			var lang_key = localStorage.getItem('settings.language') || '';
			if (lang_key) {
				service.language = lang_key;
				service.setLanguage(lang_key);
			}

		} catch (e) {
			console.log("Lang: " + e);
		}

		return service;


		function setLanguage(key) {

			$translate.use(key)

			.then(function(key) {
				service.language = key;
				localStorage.setItem('settings.language', service.language);
				console.log("Sprache zu " + key + " gewechselt.");

			}, function(key) {
				console.log("Irgendwas lief schief.");
			});
		}
	}

})();
