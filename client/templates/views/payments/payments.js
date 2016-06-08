Template.payments.onRendered(function(){

	Meteor.call('getClientToken', function(error, clientToken) {
		if (error) {
			Bert.alert('Makse ebaõnnestus! Kontakteeru lehe administraatoriga.', "danger");
  			console.log(error.stack);
		} else {
  			braintree.setup(clientToken, "dropin", {
    			container: "payment-form", // Injecting into <div id="payment-form"></div>
    			onPaymentMethodReceived: function (response) {
      				
					// When we submit the payment form,
      				// we'll receive a response that includes
      				// payment method nonce:
      				var nonce = response.nonce;
				
					Meteor.call('btCreateCustomer', function(error, success) {
						if (error) {
							console.log("Failed to create customer: ", error.stack);
							throw new Meteor.Error('customer-creation-failed');
						} else {
							// ... and when the customer is successfuly created,
							// call method for creating a transaction (finally!)
							Meteor.call('createTransaction', nonce, function(error, success) {
								if (success.success) {
									Bert.alert('Makse edukalt sooritatud! Naudi mängimist!', "success");
									Router.go('root');
								} else {
									Bert.alert('Makse ebaõnnestus! Kontakteeru lehe administraatoriga.', "danger");
								}
							});
						}
					});
    			}
  			});
		}
	});

});
