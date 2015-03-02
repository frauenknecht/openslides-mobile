angular.module('osl')

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

.controller('UsersCtrl', function ($scope, $state, Users) {	
	$scope.users = Users.all();	
})


.controller('UserDetailCtrl', function ($scope, $stateParams, Users) {
	$scope.user = Users.find($stateParams.id);
});

