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

	console.log("Braintree env: ", env);

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
		
		if (user.customerId) {
			Meteor.users.update(user._id, {
				$set: {
					existingCustomerId: true
				}
			});
		} else {
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
				}
			});
		}
	},

	createTransaction: function(nonceFromTheClient) {
		check(nonceFromTheClient, String);
		
		var user = Meteor.user();
		var customerId, customer;

		if (user.existingCustomerId) {
			customerId = user.customerId;
			customer = {}
		} else {
			customer = {
				id: user.customerId
	  		}
		}

		var options = {
			amount: '20.00',
	  		paymentMethodNonce: nonceFromTheClient, // Generated nonce passed from client
	  		customer: customer,
			customerId: customerId,
	  		options: {
				submitForSettlement: true, // Payment is submitted for settlement immediatelly
				storeInVaultOnSuccess: true // Store customer in Braintree's Vault
	  		}
		};

		// Let's create transaction in a synchronised way
		var syncFunction = Meteor.wrapAsync(gateway.transaction.sale);
		var result = syncFunction(options);

		console.log("Result:", result);

		if (result.success) {
			// When payment's successful, add "registered-user" role to current user.
			Roles.addUsersToRoles(user._id, ['registered-user'])
			Roles.removeUsersFromRoles(user._id, 'regular-user')
			Meteor.call("createUserPoints", user);
			console.log("Payment created for user: ", user._id);
			return result;
		} else {
			return false;
		}
	},

	/*downgradeToRegular: function(userId) {
		check(userId, String);
		Roles.removeUsersFromRoles(userId, 'registered-user')
		console.log("User with id " + userId + " downgraded to regular");
	}*/
});
