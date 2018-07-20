import {AureliaFactory} from 'construction/aurelia-factory';
import environment from 'environment';
import {Factory} from 'construction/factory';
import {HttpClient} from 'aurelia-http-client';

export function configure(aurelia) {
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.plugin('aurelia-dialog')
		.plugin('aurelia-validation')
		.plugin('aurelia-table')
		.plugin('aurelia-configuration');

	if (environment.debug)
		aurelia.use.developmentLogging();	

	if (environment.testing)
		aurelia.use.plugin('aurelia-testing');

	let http = aurelia.container.get(HttpClient);
	http
		.configure(config => {
			config
				.withBaseUrl(environment.apiBaseUrl)
		});

	aurelia.container.registerInstance(HttpClient, http);

	aurelia.start().then(function() {		
		aurelia.setRoot('app');
	});	
}