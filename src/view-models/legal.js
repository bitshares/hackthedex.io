import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Legal {

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}