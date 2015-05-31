angular.module('osl')

.service('oslAuth', function($q, $http, $rootScope) {

	var service = {

		api_url: '',

		initialize: function(url) {
			this.api_url = url;
			return this.refresh('<token>');
		},

		request: function(args) {

			var defer = $q.defer();

			$http({
				url: this.api_url + args.url,
				method: args.method || "GET",
				headers: args.headers || {},
				params: args.params || {},
				data: args.data || {}
			})

			.success(function(data, status, headers, config) {
				defer.resolve(data, status);
			})

			.error(function(data, status, headers, config) {
				if (data) {
					data.status = status;
				}
				if (status == 0) {
					if (data == "") {
						data = {};
						data['status'] = 0;
						data['non_field_errors'] = ["Could not connect. Please try again."];
					}
					// or if the data is null, then there was a timeout.
					if (data == null) {
						// Inject a non field error alerting the user
						// that there's been a timeout error.
						data = {};
						data['status'] = 0;
						data['non_field_errors'] = ["Server timed out. Please try again."];
					}
				}
				defer.reject(data, status, headers, config);
			});

			return defer.promise;
		},

		login: function(username, password) {

			var defer = $q.defer();
			/*						
			this.request({
				url: '/rest/token-auth/',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					'username':username,
					'password':password
				}
			}).then(function(data){
				$http.defaults.headers.common.Authorization = 'JWT ' + data.token;
				defer.resolve(data);			
                $rootScope.$broadcast("auth.logged_in");
				
            }, function (data) {
            	defer.reject(data);
            });
*/
			defer.resolve('data');
			$rootScope.$broadcast("auth.logged_in");

			return defer.promise;
		},

		logout: function() {
			// delete $http.defaults.headers.common.Authorization;
			$rootScope.$broadcast("auth.logged_out");
		},

		refresh: function(token) {

			var defer = $q.defer();
			/*						
			this.request({
				url: '/rest/token-refresh/',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					'token':token
				}
			}).then(function(data){
				$http.defaults.headers.common.Authorization = 'JWT ' + data.token;
				defer.resolve(data);			
                $rootScope.$broadcast("auth.logged_in");
				
            }, function (data) {
            	defer.reject(data);
            });
*/
			defer.reject('invalid');
			return defer.promise;

		},

	}

	return service;

});
