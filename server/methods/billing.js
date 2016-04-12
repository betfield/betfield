// Define gateway variable 
var gateway;

Meteor.startup(function () {
	var env;

	// Pick Braintree environment based on environment defined in Meteor settings.
	if (Meteor.settings.public.env === 'Production') {
		env = Braintree.Environment.Production;
	} else {
		env = Braintree.Environment.Sandbox;
	}

	// Initialize Braintree connection:
	gateway = BrainTreeConnect({
		environment: env,
		publicKey: Meteor.settings.public.BT_PUBLIC_KEY,
		privateKey: Meteor.settings.private.BT_PRIVATE_KEY,
		merchantId: Meteor.settings.public.BT_MERCHANT_ID
	});
});

Meteor.methods({
	getClientToken: function (clientId) {
		var generateToken = Meteor.wrapAsync(gateway.clientToken.generate, gateway.clientToken);
		var options = {};

		if (clientId) {
  			options.clientId = clientId;
		}

		var response = generateToken(options);
		return response.clientToken;
	},

	btCreateCustomer: function(){
		var user = Meteor.user();
		console.log("btCreateCustomer.user: " + user._id);

		var customerData = {
			email: user.profile.email
		};
		
		console.log("btCreateCustomer.customerData: " + customerData);

		// Calling the Braintree API to create our customer!
		gateway.customer.create(customerData, function(error, response){
			if (error){
				console.log(error);
			} else {
				// If customer is successfuly created on Braintree servers,
				// we will now add customer ID to our User
				Meteor.users.update(user._id, {
					$set: {
						customerId: response.customer.id
					}
				});
				console.log("btCreateCustomer.response: " + response);
			}
		});
	},

	createTransaction: function(nonceFromTheClient) {

		var user = Meteor.user();

		// Let's create transaction.
		gateway.transaction.sale({
			amount: '15.00',
	  		paymentMethodNonce: nonceFromTheClient, // Generated nonce passed from client
	  		customer: {
				id: user.customerId
	  		},
	  		options: {
				submitForSettlement: true, // Payment is submitted for settlement immediatelly
				storeInVaultOnSuccess: true // Store customer in Braintree's Vault
	  		}
		}, function (err, success) {
	  		if (err) { 
				console.log(err);
	  		} else {
				// When payment's successful, add "paid" and "premium-user" roles to current user.
				Roles.addUsersToRoles(user._id, ['paid', 'premium-user'], Roles.GLOBAL_GROUP)
	  		}
		});
	},

	downgradeToRegular: function(userId) {
		Meteor.users.update( {_id: Meteor.user()._id} , {$unset: { roles : "" } } );
		console.log("User with id " + userId + " downgraded to regular");
	}
});