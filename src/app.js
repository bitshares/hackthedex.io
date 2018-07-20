import $ from 'jquery';
import 'bootstrap';
import {inject, Container} from 'aurelia-framework'; 

@inject(Container)
export class App {

	constructor(container) {
		container.registerInstance('Processing', this.Processing.bind(this));
	}

	configureRouter(config, router) {
		config.title = 'Hack the DEX';
		config.map([
			{ 
				route: ['', 'index'], 
				name: 'index', 
				moduleId: './view-models/index',
				nav: true, 
				title: 'Index', 
				settings: {
					menu: ['root'], 
					iconClass: 'fa-angle-right'
				} 
			},
			{
				route: ['bounty-program-parent'],
				name: 'bounty-program-parent',
				moduleId: './view-models/open-bounties',
				nav: true, 
				title: 'Bounty Program', 
				settings: {
					menu: ['root', 'header'], 
					iconClass: 'fa-code',
					hasSubmenu: true,
					menuId: 'bounty-program'
				}
			},
			{
				route: ['rules'], 
				name: 'rules', 
				moduleId: './view-models/rules', 
				nav: true, 
				title: 'Rules', 
				settings: {
					menu: ['bounty-program'], 
					iconClass: 'fa-list'
				}
			},
			{
				route: ['rewards'], 
				name: 'rewards', 
				moduleId: './view-models/rewards', 
				nav: true, 
				title: 'Rewards', 
				settings: {
					menu: ['bounty-program'], 
					iconClass: 'fa-money'
				}
			},
			{
				route: ['open-bounties'], 
				name: 'open-bounties', 
				moduleId: './view-models/open-bounties', 
				nav: true, 
				title: 'Open Bounties', 
				settings: {
					menu: ['bounty-program'], 
					iconClass: 'fa-code'
				}
			},
			{
				route: ['leaderboard'], 
				name: 'leaderboard', 
				moduleId: './view-models/leaderboard',
				nav: true, 
				title: 'Leaderboard', 
				settings: {
					menu: ['bounty-program'], 
					iconClass: 'fa-trophy'
				}
			},
			{
				route: ['testnet'], 
				name: 'testnet', 
				moduleId: './view-models/testnet',
				nav: true, 
				title: 'Testnet Setup', 
				settings: {
					menu: ['bounty-program'], 
					iconClass: 'fa-document'
				}
			},
			{
				route: ['transparency'], 
				name: 'transparency', 
				moduleId: './view-models/transparency', 
				nav: true, 
				title: 'Transparency', 
				settings: {
					menu: ['root', 'header'], 
					iconClass: 'fa fa-eye',
					hasSubmenu: true,
					menuId: 'transparency'
				}
			},
			{
				route: ['funding'], 
				name: 'funding', 
				moduleId: './view-models/funding',
				nav: true, 
				title: 'Funding', 
				settings: {
					menu: ['transparency'], 
					iconClass: 'fa-money'
				}
			},
			{
				route: ['reports'], 
				name: 'reports', 
				moduleId: './view-models/reports',
				nav: true, 
				title: 'Reports', 
				settings: {
					menu: ['transparency'], 
					iconClass: 'fa-report'
				}
			},
			{
				route: ['alerts'], 
				name: 'alerts', 
				moduleId: './view-models/alerts', 
				nav: true, 
				title: 'Alerts',
				settings: {
					menu: ['transparency'],
					iconClass: 'fa fa-exclamation-triangle'
				}
			},
			{
				route: ['legal'], 
				name: 'legal', 
				moduleId: './view-models/legal',
				nav: true, 
				title: 'Legal', 
				settings: {
					menu: ['transparency'], 
					iconClass: 'fa-legal'
				}
			},
			{
				route: ['submit'], 
				name: 'submit', 
				moduleId: './view-models/submit', 
				nav: false, 
				title: 'Submit',
				settings: {
					menu: ['root', 'header'], 
					iconClass: 'fa fa-sign-in'
				}
			},
			{
				route: ['thankyou'], 
				name: 'thankyou', 
				moduleId: './view-models/thankyou', 
				nav: false, 
				title: 'Thank You',
				settings: {
					menu: [],
					iconClass: 'fa fa-star'
				}
			},
		]);

		config.mapUnknownRoutes('');

		this.router = router;
	}	

	Processing(bool)
	{
		this.processing = bool;
	}
}