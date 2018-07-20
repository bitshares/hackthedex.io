import {Aurelia} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';

@inject(Aurelia, Router)
export class NavBar {

	@bindable router = null;

	constructor(aurelia, router) {
		this.aurelia = aurelia;
		this.router = router;
		this.loadWorker();
	}

	loadWorker() {
		let self = this;

		new HttpClient()
			.fetch('https://api.workers.bitshares.foundation/v1/escrow/201807-hackthedex')
			.then(response => response.json())
			.then(json => {
				self.currentFundingUSD = Math.round(json.amounts.currency.total_max.float).toLocaleString();
				self.workerActive = json.worker.receives.daily.float > 0;
			})
			.catch(error => {
				console.log("Error loading worker: ", error);
				self.workerActive = false;
				self.currentFundingUSD = "Error";
			});
	}

	submitReport() {
		this.router.navigateToRoute('submit');
	}
}