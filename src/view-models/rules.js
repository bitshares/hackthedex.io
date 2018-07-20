import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Rules {

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}