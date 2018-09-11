export class RouteMenuFilterValueConverter {
	toView(routes, menu) {
		let r = [];
		
		for(let route of routes) {
			if (route.settings.menu.some(m => m === menu) || (menu == 'root' && (!route.settings || !route.settings.menu))) {
				r.push(route);
			}
		}
		
		return r;
	}
}