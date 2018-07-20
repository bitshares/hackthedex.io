import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Funding {

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}