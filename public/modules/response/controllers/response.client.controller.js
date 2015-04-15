'use strict';

// Responses controller
angular.module('response').controller('ResponseController', ['$scope', '$stateParams', '$location', 'Authentication', 'Responses',
	function($scope, $stateParams, $location, Authentication, Responses) {
		$scope.authentication = Authentication;

		// Create new Response
		$scope.create = function() {
			// Create new Response object
			var response = new Responses 
                q1 : this.q1,
				r1 : this.r1,
                q2 : this.q2,
                r2 : this.r2,
                q3 : this.q3,
                r3 : this.r3,
                q4 : this.q4,
                r4 : this.r4,
                q5 : this.q5,
                r5 : this.r5,
                q6 : this.q6,
                r6 : this.r6,
                q7 : this.q7,
                r7 : this.r7,
                q8 : this.q8,
                r8 : this.r8,
                q9 : this.q9,
                r9 : this.r9,
                q10 : this.q10,
                r10 : this.r10,
			});

			// Redirect after save
			response.$save(function(response) {
				$location.path('response/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Response
		$scope.remove = function(response) {
			if ( response ) { 
				response.$remove();

				for (var i in $scope.response) {
					if ($scope.response [i] === response) {
						$scope.response.splice(i, 1);
					}
				}
			} else {
				$scope.response.$remove(function() {
					$location.path('response');
				});
			}
		};

		// Update existing Response
		$scope.update = function() {
			var response = $scope.response;

			response.$update(function() {
				$location.path('response/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Responses
		$scope.find = function() {
			$scope.response = Responses.query();
		};

		// Find existing Response
		$scope.findOne = function() {
			$scope.response = Responses.get({ 
				responseId: $stateParams.responseId
			});
		};
	}
]);