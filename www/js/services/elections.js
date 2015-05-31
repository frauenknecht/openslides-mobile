(function() {

	'use strict';

	angular
		.module('osl')
		.factory('Elections', Elections);

	Elections.$inject = ['$http'];

	function Elections($http) {

		var service = {
			all: all,
			find: find
		}

		return service;


		function all() {
			return window.elections;
		}

		function find(id) {
			for (var i = 0; i < window.elections.length; i++) {
				if (window.elections[i].id == id) {
					return window.elections[i];
				}
			}
		}

	};

	window.elections = [{
			id: "1",
			title: "Schatzmeister",
			description: "Der Schatzmeister hat folgende Aufgaben: 1. a 2. b 3. c",
			open_posts: "1",
			candidates: "1",
			elected: "0",
			phase: "Auf Kandidatensuche"
		},

		{
			id: "2",
			title: "Vorstand",
			description: "Der Vorstand wird alle 3 Jahre gewählt und trifft sich 6 Mal im Jahr. Die Aufgaben des Vorstands sind in der Satzung geregelt.",
			open_posts: "3",
			candidates: "4",
			elected: "0",
			phase: "Im Wahlvorgang"
		},

		{
			id: "3",
			title: "Ältestenrat",
			description: "Der Ältestenrat besteht aus 3 Personen und wird für die Dauer der Versammlung gewählt.",
			open_posts: "3",
			candidates: "3",
			elected: "0",
			phase: "Im Wahlvorgang"
		}
	];


})();
