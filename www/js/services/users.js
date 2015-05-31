(function() {

	'use strict';

	angular
		.module('osl')
		.factory('Users', Users);

	Users.$inject = ['$http', '$filter'];

	function Users($http, $filter) {

		var service = {
			all: all,
			find: find
		}

		return service;


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
			return $filter('orderBy')(window.users, '+last_name');
		}

	};

	window.users = [{
			id: "1",
			is_present: true,
			title: "",
			first_name: "Ashok",
			last_name: "Kumar",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Indien",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "2",
			is_present: false,
			title: "Dr.",
			first_name: "Bob",
			last_name: "Smith",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Neuseeeland",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["FOO", "BAR", "BAZ"]
		},

		{
			id: "3",
			is_present: true,
			title: "",
			first_name: "Cutare",
			last_name: "Cutărică",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Rumänien",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "4",
			is_present: false,
			title: "",
			first_name: "Erika",
			last_name: "Mustermann",
			gender: "F",
			email: "foo@bar.com",
			structure_level: "Deutschland",
			committee: "",
			about_me: "",
			comment: "",
			groups: []
		},

		{
			id: "5",
			is_present: true,
			title: "",
			first_name: "Fred",
			last_name: "Nurk",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Australien",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "6",
			is_present: false,
			title: "",
			first_name: "Fred",
			last_name: "Bloggs",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Großbritanien",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["Delegierte/r"]
		}, {
			id: "7",
			is_present: true,
			title: "",
			first_name: "Fulano",
			last_name: "de Tal",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Kolumbien",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "8",
			is_present: false,
			title: "",
			first_name: "Gipsz",
			last_name: "Jakab",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Ungarn",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["FOO", "BAR", "BAZ"]
		}, {
			id: "9",
			is_present: true,
			title: "Prof.",
			first_name: "Hans",
			last_name: "Maier",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Österreich",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "10",
			is_present: false,
			title: "",
			first_name: "Harry",
			last_name: "Holland",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Niederlande",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["FOO", "BAR", "BAZ"]
		},

		{
			id: "11",
			is_present: true,
			title: "",
			first_name: "Israel",
			last_name: "Israeli",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Israel",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "12",
			is_present: false,
			title: "",
			first_name: "Jan",
			last_name: "Jansen",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Belgien",
			committee: "",
			about_me: "",
			comment: "",
			groups: []
		},

		{
			id: "13",
			is_present: true,
			title: "",
			first_name: "Jan",
			last_name: "Kowalski",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Polen",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "14",
			is_present: false,
			title: "Dr.",
			first_name: "Jan",
			last_name: "Novák",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Tschechien",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "15",
			is_present: true,
			title: "",
			first_name: "Jane",
			last_name: "Doe",
			gender: "F",
			email: "foo@bar.com",
			structure_level: "USA",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: []
		},

		{
			id: "16",
			is_present: false,
			title: "",
			first_name: "Janez",
			last_name: "Novak",
			gender: "F",
			email: "foo@bar.com",
			structure_level: "Slowenien",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["Delegierte/r"]
		}, {
			id: "17",
			is_present: true,
			title: "",
			first_name: "Jean",
			last_name: "Dupont",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Frankreich",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "18",
			is_present: false,
			title: "",
			first_name: "Koos",
			last_name: "van der Merwe",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Südafrika",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["FOO", "BAR", "BAZ"]
		}, {
			id: "19",
			is_present: true,
			title: "",
			first_name: "Maija",
			last_name: "Maikäläinen",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Finnland",
			committee: "",
			about_me: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment: "",
			groups: ["Delegierte/r"]
		},

		{
			id: "20",
			is_present: false,
			title: "Dr.",
			first_name: "Max",
			last_name: "Mustermann",
			gender: "M",
			email: "foo@bar.com",
			structure_level: "Deutschland",
			committee: "",
			about_me: "",
			comment: "",
			groups: ["Mitarbeiter/in", "Vorstand"]
		}
	];


})();
