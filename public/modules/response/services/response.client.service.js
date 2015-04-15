'use strict';

//Responses service used to communicate Responses REST endpoints
angular.module('response').factory('Responses', ['$resource',
	function($resource) {
		return $resource('response/:responseId', { responseId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);