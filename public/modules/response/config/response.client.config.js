'use strict';

// Configuring the Articles module
angular.module('response').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Responses', 'response', 'dropdown', '/response(/create)?');
		Menus.addSubMenuItem('topbar', 'response', 'List Responses', 'response');
		Menus.addSubMenuItem('topbar', 'response', 'New Response', 'response/create');
	}
]);