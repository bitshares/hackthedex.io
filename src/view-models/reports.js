import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Reports {

	reports = [
		{
			name: "20180728A",
			type: "Cross-site scripting (XSS) code injection",
			description: "BitShares UI: Asset description",
			link: "/src/assets/reports/Report 20180728A.pdf"
		},
		{
			name: "20180801A",
			type: "Cross-site scripting (XSS) code injection",
			description: "BitShares UI: Memo message",
			link: "/src/assets/reports/Report 20180801A.pdf"
		},
		{
			name: "20180807E",
			type: "Denial of Service through broadcasting prepared transactions",
			description: "BitShares Core: Nested Proposal",
			link: "/src/assets/reports/Report 20180807E.pdf"
		},
		{
			name: "20180918A",
			type: "Cross-site scripting (XSS) code injection",
			description: "BitShares UI: TradingView Link",
			link: "/src/assets/reports/Report 20180918A.pdf"
		},
		{
			name: "20181008A",
			type: "Subdomain takeover",
			description: "CNAME imposter of dev.bitshares.org",
			link: "/src/assets/reports/Report 20181008A.pdf"
		},
		{
			name: "20181206A",
			type: "Blockchain hault provocation",
			description: "BitShares Core: Smartcoin supply number overflow",
			link: "/src/assets/reports/Report 20181206A.pdf"
		}
	];

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}
