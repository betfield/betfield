Meteor.startup(function () {
	// Allow all content to be loaded on the site that originates from Facebook
	BrowserPolicy.content.allowOriginForAll('*.facebook.com');
	BrowserPolicy.content.allowOriginForAll('*.fbcdn.net'); // Facebook Content Delivery Network (CDN) site
	
	// Allow all data from the Google API
	BrowserPolicy.content.allowOriginForAll('*.googleapis.com');
	BrowserPolicy.content.allowOriginForAll('*.gstatic.com'); // Google CDN site
	BrowserPolicy.content.allowOriginForAll('*.googleusercontent.com');

	// Allow Braintree
	BrowserPolicy.content.allowOriginForAll('*.braintreegateway.com');
	
	// Allow Twitter
	BrowserPolicy.content.allowOriginForAll('*.twimg.com');
	
	// Allow Paypal
	BrowserPolicy.content.allowOriginForAll('*.paypalobjects.com');
	
});
