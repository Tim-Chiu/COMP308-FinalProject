'use strict';

// Surveys controller
angular.module('surveys').controller('SurveysController', ['$scope', '$stateParams', '$location', 'Authentication', 'Surveys',
	function($scope, $stateParams, $location, Authentication, Surveys) {
		$scope.authentication = Authentication;

		// Create new Survey
		$scope.create = function() {
			// Create new Survey object
			var survey = new Surveys ({
                q1: this.q1,
                a11:this.a11,
                a12:this.a12,
                a13:this.a13,
                a14:this.a14,
                q2: this.q2,
                a21:this.a21,
                a22:this.a22,
                a23:this.a23,
                a24:this.a24,
                q3: this.q3,
                a31:this.a31,
                a32:this.a32,
                a33:this.a33,
                a34:this.a34,
                q4: this.q4,
                a41:this.a41,
                a42:this.a42,
                a43:this.a43,
                a44:this.a44,
                q5: this.q5,
                a51:this.a51,
                a52:this.a52,
                a53:this.a53,
                a54:this.a54,
                q6: this.q6,
                a61:this.a61,
                a62:this.a62,
                a63:this.a63,
                a64:this.a64,
                q7: this.q7,
                a71:this.a71,
                a72:this.a72,
                a73:this.a73,
                a74:this.a74,
                q8: this.q8,
                a81:this.a81,
                a82:this.a82,
                a83:this.a83,
                a84:this.a84,
                q9: this.q9,
                a91:this.a91,
                a92:this.a92,
                a93:this.a93,
                a94:this.a94,
                q10: this.q10,
                a101:this.a101,
                a102:this.a102,
                a103:this.a103,
                a104:this.a104,
			});

			// Redirect after save
			survey.$save(function(response) {
				$location.path('surveys/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Survey
		$scope.remove = function(survey) {
			if ( survey ) { 
				survey.$remove();

				for (var i in $scope.surveys) {
					if ($scope.surveys [i] === survey) {
						$scope.surveys.splice(i, 1);
					}
				}
			} else {
				$scope.survey.$remove(function() {
					$location.path('surveys');
				});
			}
		};

		// Update existing Survey
		$scope.update = function() {
			var survey = $scope.survey;

			survey.$update(function() {
				$location.path('surveys/' + survey._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Surveys
		$scope.find = function() {
			$scope.surveys = Surveys.query();
		};

		// Find existing Survey
		$scope.findOne = function() {
			$scope.survey = Surveys.get({ 
				surveyId: $stateParams.surveyId
			});
		};
	}
]);