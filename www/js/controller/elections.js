angular.module('osl')

.factory('Elections', ['$http', function ($http) {
	
	var elections = [
    	{
			id				: "1",
			title			: "Schatzmeister",			
			open_posts		: "1",
			candidates		: "1",
			elected			: "0",
			phase			: "Auf Kandidatensuche"
    	},

		{
			id				: "2",
			title			: "Vorstand",
			open_posts		: "3",
			candidates		: "4",
			elected			: "0",
			phase			: "Im Wahlvorgang"
		},

		{
			id				: "3",
			title			: "Ältestenrat",
			open_posts		: "3",
			candidates		: "3",
			elected			: "0",
			phase			: "Im Wahlvorgang"
		}
	];
	
  	return {
		
		get_elections : function() {
			return elections;			
		},
		
		get_election : function(id) {
			for(i=0; i<elections.length; i++){
				if(elections[i].id == id){
					return elections[i];
				}	
			}
		}  		
  	}
	
}])

.controller('ElectionsCtrl', function ($scope) {
	
	$scope.elections = [
    	{
			id				: "1",
			title			: "Schatzmeister",			
			open_posts		: "1",
			candidates		: "1",
			elected			: "0",
			phase			: "Auf Kandidatensuche"
    	},

		{
			id				: "2",
			title			: "Vorstand",
			open_posts		: "3",
			candidates		: "4",
			elected			: "0",
			phase			: "Im Wahlvorgang"
		},

		{
			id				: "3",
			title			: "Ältestenrat",
			open_posts		: "3",
			candidates		: "3",
			elected			: "0",
			phase			: "Im Wahlvorgang"
		}
	];		
})

.controller('ElectionDetailCtrl', function ($scope, $stateParams) {
	$scope.election
	
});
