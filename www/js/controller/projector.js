angular.module('osl')

.controller('ProjectorCtrl', function($scope, WebSocket) {

	console.log('ProjectorCtrl');


	function updateProjector(data) {

		if (data.content) {
			$scope.content = data.content;
			console.log('ProjectorCtrl' + $scope.content);
		}

		if (data.overlays) {
			$scope.overlays = data.overlays;
		}

		if (data.calls) {
			$scope.calls = data.calls;
		}

	}

	WebSocket.setHandler('message', function(event) {
		updateProjector(event.data);
	});

});
