(function() {

	'use strict';

	angular
		.module('osl')
		.factory('Files', Files);

	Files.$inject = ['$http', '$filter'];

	function Files($http, $filter) {

		var service = {
			columns: columns,
			all: all,
			find: find
		}

		return service;


		function columns() {
			return window.column_names;
		}
		
		function all() {
			return sort();
		}

		function find(id) {
			for (var i = 0; i < window.users.length; i++) {
				if (window.users[i].id == id) {
					return window.users[i];
				}
			}
		}


		function sort() {
			console.log(window.files);
			return $filter('orderBy')(window.files, '+name');
		}

	};

	
	
	window.files = [
		{
			title: "Funktionsweise von OpenSlides",
			type: "application/pdf",
			size: "815 kB",
			uploader: "Dr. Max Mustermann (Deutschland)"
		},

		{
			title: "Grundgesetz für die Bundesrepublik Deutschland",
			type: "application/pdf",
			size: "190 kB",
			uploader: "Erika Mustermann (Deutschland)"			
		},

		{
			title: "Präsentationstipps",
			type: "application/pdf",
			size: "673 kB",
			uploader: "Paul Martin (Frankreich)"			
		}
	];

})();
