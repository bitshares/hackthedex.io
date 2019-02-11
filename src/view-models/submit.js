import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

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

		let submission = self.submission;

		let pretty_body = `<h2>Hack The DEX Submission</h2>Repository: ${submission.repository}<br />Issue: ${submission.summary}<br />Severity: ${severity}<h3>Reporter</h3>Name: ${submission.name}<br />Email: ${submission.email}<br />BitShares Account: ${submission.btsaccount}<br />`
			+ (!!submission.declineReward ? `Payout declined: ${submission.declineReward}` : ``)
			+ `<h3>Attack Vector</h3>${submission.attackVector.replace(new RegExp("\n", 'g'), `<br />`)}<h3>Steps to reproduce</h3>${submission.stepsToReproduce.replace(new RegExp("\n", 'g'), `<br />`)}<br /><br />`;

		let subject = encodeURIComponent("HackTheDex Report: " + new Date().toUTCString());
		let message = encodeURIComponent(pretty_body);

		location.href = 'mailto:submit@hackthedex.io?subject=' + subject + '&body=' + message;

		self.submission.submitted = true;
	}
}