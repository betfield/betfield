Template.leagues.onRendered(function(){

	var instance = this;
	
	instance.autorun(function() {
	    instance.subscribe('leagues');
  	});

	   // Initialize Example 1
    $('#example1').footable();
});

Template.leagues.helpers({
	leagues: function(){
    	return Leagues.find();
  	}
});

