getUserLanguage = function () {
  // Put here the logic for determining the user language

  return "et";
};


// Run this when the meteor app is started
Meteor.startup(function () {
	
//	Session.set("showLoadingIndicator", true);

    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        //Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });

});

