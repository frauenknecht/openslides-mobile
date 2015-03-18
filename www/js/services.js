angular.module('osl')

.service('oslAuth', function($q, $http, $cookies, $rootScope) {
		
	var service = {

		api_url: '',
		auth_promise: null,	
		authenticated: null,
		
	    initialize: function(url){
			this.api_url = url;
			// return this.status();
		},
		
		status: function(restrict, force){
			console.log('status ' + restrict + ' ' + force);
			// Set restrict to true to reject the promise if not logged in
            // Set to false or omit to resolve when status is known
            // Set force to true to ignore stored value and query API
            restrict = restrict || false;
            force = force || false;
			
			console.log('status ' + restrict + ' ' + force);
			
						
            if(this.authPromise == null || force){
                this.authPromise = this.request({
                    'method': "GET",
                    'url': "/users/"
                })
            }
            var da = this;
            var getAuthStatus = $q.defer();
            if(this.authenticated != null && !force){
                // We have a stored value which means we can pass it back right away.
                if(this.authenticated == false && restrict){
                    getAuthStatus.reject("User is not logged in.");
                }else{
                    getAuthStatus.resolve();
                }
            }else{
                // There isn't a stored value, or we're forcing a request back to
                // the API to get the authentication status.
                this.authPromise.then(function(){
                    da.authenticated = true;
                    getAuthStatus.resolve();
                },function(){
                    da.authenticated = false;
                    if(restrict){
                        getAuthStatus.reject("User is not logged in.");
                    }else{
                        getAuthStatus.resolve();
                    }
                });
            }
            return getAuthStatus.promise;
		},
		
		request: function(args) {
            // Let's retrieve the token from the cookie, if available
            if($cookies.token){
                $http.defaults.headers.common.Authorization = 'Token ' + $cookies.token;
            }
            // Continue
            params = args.params || {}
            args = args || {};
            var deferred = $q.defer(),
                url = this.api_url + args.url,
                method = args.method || "GET",
                params = params,
                data = args.data || {};
			
            /*
            $http({
                url: url,
                withCredentials: false,
                method: method.toUpperCase(),
                headers: {'X-CSRFToken': $cookies['csrftoken']},
                params: params,
                data: data
            })
			
            .success(angular.bind(this,function(data, status, headers, config) {
                deferred.resolve(data, status);
            }))
			
            .error(angular.bind(this,function(data, status, headers, config) {
                console.log("error syncing with: " + url);
                // Set request status
                if(data){
                    data.status = status;
                }
                if(status == 0){
                    if(data == ""){
                        data = {};
                        data['status'] = 0;
                        data['non_field_errors'] = ["Could not connect. Please try again."];
                    }
                    // or if the data is null, then there was a timeout.
                    if(data == null){
                        // Inject a non field error alerting the user
                        // that there's been a timeout error.
                        data = {};
                        data['status'] = 0;
                        data['non_field_errors'] = ["Server timed out. Please try again."];
                    }
                }
                deferred.reject(data, status, headers, config);
            }));
			*/
			
			deferred.resolve(data, '');			
            return deferred.promise;			
		},

		login: function(username, password) {
			console.log('login');
			
            return this.request({
                'method': "POST",
                'url': "/users/login/",
                'data':{
                    'username':username,
                    'password':password
                }

            }).then(function(data){
				$http.defaults.headers.common.Authorization = 'Token ' + data.key;
				$cookies.token = data.key;
				this.authenticated = true;
                $rootScope.$broadcast("auth.logged_in", data);
            });		
		},
		
		logout: function() {
			console.log('logout');

			return this.request({
                'method': "POST",
                'url': "/users/logout/"
				
            }).then(function(data){
                delete $http.defaults.headers.common.Authorization;
                delete $cookies.token;
                this.authenticated = false;
                $rootScope.$broadcast("auth.logged_out");
            });			
		}					
	}
	
	return service;
		
});
