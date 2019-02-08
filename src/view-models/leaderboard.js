import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Leaderboard {

	hackers = [
		{
			name: "Anonymous",
			github: "htd.rmg.bounty42",
			bugsReported: 3,
			totalReward: 17333
		},
		{
			name: "Valera Cogut",
			github: "valera-hacked-dex",
			bugsReported: 1,
			totalReward: 15000
		}
	];

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}