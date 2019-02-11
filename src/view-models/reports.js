import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Reports {

	reports = [
		{
			name: "20180728A",
			type: "Cross-site scripting (XSS) code injection",
			description: "BitShares UI: Asset description",
			link: ""
		},
		{
			name: "20180801A",
			type: "Cross-site scripting (XSS) code injection",
			description: "BitShares UI: Memo message",
			link: ""
		},
		{
			name: "20180807E",
			type: "Denial of Service through broadcasting prepared transactions",
			description: "BitShares Core: Nested Proposal",
			link: ""
		},
		{
			name: "20180918A",
			type: "Cross-site scripting (XSS) code injection",
			description: "BitShares UI: TradingView Link",
			link: ""
		},
		{
			name: "20181008A",
			type: "Subdomain takeover",
			description: "CNAME imposter of dev.bitshares.org",
			link: ""
		},
		{
			name: "20181206A",
			type: "Blockchain hault provocation",
			description: "BitShares Core: Smartcoin supply number overflow",
			link: ""
		}
	];

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}
