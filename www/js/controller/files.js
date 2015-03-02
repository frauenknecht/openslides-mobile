
angular.module('osl')

.controller('FilesCtrl', function ($scope, $cordovaFileOpener2, $cordovaInAppBrowser, $cordovaDialogs) {	

	$scope.files = [
    	{
			id				: "1",
			title			: "Funktionsweise von OpenSlides",
			mediafile		: "http://de.demo.openslides.org/media/file/openslides-funktionsweise.pdf",
			uploader		: "Dr. Max Mustermann",
			filesize		: "",
			filetype		: "application/pdf",
			timestamp		: "",
			is_presentable	: false
    	},

		{
			id				: "2",
			title			: "Grundgesetz für die Bundesrepublik Deutschland",
			mediafile		: "http://de.demo.openslides.org/media/file/gesamt.pdf",
			uploader		: "Erika Mustermann (Deutschland)",
			filesize		: "",
			filetype		: "application/pdf",
			timestamp		: "",
			is_presentable	: false			
		},

		{
			id				: "3",
			title			: "Präsentationstipps",
			mediafile		: "http://de.demo.openslides.org/media/file/tipps_pdf.pdf",
			uploader		: "Paul Martin (Frankreich)",
			filesize		: "",
			filetype		: "application/pdf",
			timestamp		: "",
			is_presentable	: false			
		}
	];

/*	
	$scope.open = function(url, content_type) {		
		console.log(url);
		console.log(content_type);		
	};

	$scope.open = function(url, content_type) {		
		
		$cordovaFileOpener2.open(url, content_type)
			.then(function() {
		      // file opened successfully
		  	}, function(err) {
		      // An error occurred. Show a message to the user
		  });		
	};
*/


	$scope.open = function(url, content_type) {		
		console.log(url);
		console.log(content_type);		

		var ref = $cordovaInAppBrowser.open('http://www.spiegel.de/', '_system', 'location=yes');
		ref.show();
		//$cordovaDialogs.alert(ref);		
	};
			
});
