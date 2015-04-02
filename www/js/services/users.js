(function() {
	
'use strict';

	angular
		.module('osl')
		.factory('Users', Users);
		
	Users.$inject = [ '$http', '$filter' ];
						
	function Users ($http, $filter) {
		
		var service = {
			all: all,
			find: find
		}
		
		return service;
		
				
		function all () {
			return sort();			
		}
		
		function find (id) {
			for(var i=0; i<window.users.length; i++){
				if(window.users[i].id == id){
					return window.users[i];
				}	
			}			
		}		
		
		
		function sort () {
			return $filter('orderBy')(window.users , '+last_name');
		}
		
	};
	
	window.users = [
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
		
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},

    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		},
    	{
         	id				: "1",
         	is_present		: true,
			title			: "",
			first_name		: "Ashok",
			last_name		: "Kumar",
			gender			: "M",
			email			: "foo@bar.com",
			structure_level	: "Indien",
			committee		: "",
			about_me		: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			comment			: "",
			groups			: ["Delegierte/r"]
    	},

		{
         	id				: "2",
         	is_present		: false,
			title			: "Dr.",
			first_name		: "Bob",
			last_name		: "Smith",
			gender			: "M",			
			email			: "foo@bar.com",			
			structure_level	: "Neuseeeland",
			committee		: "",			
			about_me		: "",
			comment			: "",
			groups			: ["FOO", "BAR", "BAZ"]
		}					
	];
	
	
})();
