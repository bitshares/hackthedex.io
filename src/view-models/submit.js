import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';

@inject(Router)
export class Submit {

	disableSubmit = false;

	submission = {
		name: null,
		email: null,
		btsaccount: null,
		summary: null,
		repository: null,
		attackVector: null,
		stepsToReproduce: null,
		severity: null,
		declineReward: null
	};

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }

	submit() {
		let self = this;
		self.disableSubmit = true;

		let http = new HttpClient();
		http.fetch('/form-proxy.php', {
			method: 'post',
			body: JSON.stringify(self.submission)
		})
		.then(response => {
			self.router.navigateToRoute('thankyou');
		})
		.catch(error => {
			console.log("Error submitting report!");
		});
	}
}