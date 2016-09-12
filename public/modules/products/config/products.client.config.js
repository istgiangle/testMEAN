'use strict';

// Products module config
angular.module('products').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Products', 'products', 'dropdown', '/products(/create)?');
		Menus.addSubMenuItem('topbar', 'products', 'List products', 'products');
		Menus.addSubMenuItem('topbar', 'products', 'New product', 'products/create');
	}
]);