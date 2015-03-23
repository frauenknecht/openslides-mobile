(function() {
	
'use strict';

	angular
		.module('osl')
		.factory('Users', Users);
		
	Users.$inject = [ '$http' ];
						
	function Users ($http) {
		
		var service = {
			all: all,
			find: find
		}
		
		return service;
		
				
		function all () {
			return users;			
		}
		
		function find (id) {
			for(var i=0; i<window.users.length; i++){
				if(window.users[i].id == id){
					return window.users[i];
				}	
			}			
		}														
	};
	
	window.users = [
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
	
	
})();
