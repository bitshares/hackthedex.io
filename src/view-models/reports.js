import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Reports {

	reports = [
		{
			name: "20180728A",
			description: "Cross-site scripting (XSS) code injection",
			link: ""
		},
		{
			name: "20180801A",
			description: "Cross-site scripting (XSS) code injection",
			link: ""
		},
		{
			name: "20180807E",
			description: "Denial of Service through broadcasting prepared transactions",
			link: ""
		},
		{
			name: "20180918A",
			description: "Cross-site scripting (XSS) code injection",
			link: ""
		},
		{
			name: "20181008A",
			description: "Subdomain takeover",
			link: ""
		},
		{
			name: "20181206A",
			description: "Blockchain hault provocation",
			link: ""
		}
	];

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}