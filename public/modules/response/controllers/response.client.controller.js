'use strict';

// Responses controller
angular.module('response').controller('ResponsesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Responses',
	function($scope, $stateParams, $location, Authentication, Responses) {
		$scope.authentication = Authentication;

		// Create new Response
		$scope.create = function() {
			// Create new Response object
			var response = new Responses ({
				name: this.name
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