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
		
		function all () {
			return users;			
		}
		
		function find (id) {
			for(i=0; i<users.length; i++){
				if(users[i].id == id){
					return users[i];
				}	
			}			
		}														
	}
	
})();
