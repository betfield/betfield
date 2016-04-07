Meteor.startup(function () {

var leagues = [
	{"name":"Rahvaliiga","members":"100","owner":"Betfield", "type":"Avalik", "pot":"€100"},
	{"name":"Mudaliiga","members":"13","owner":"Karpo Korõtko", "type":"Privaatne", "pot":"€1400"},
	{"name":"Sopaliiga","members":"320","owner":"Priit Haasma", "type":"Privaatne", "pot":"€200"},
	{"name":"Meistriliiga","members":"700","owner":"Keegi Muu", "type":"Privaatne", "pot":"€2344"},
	{"name":"Võsaliiga","members":"1030","owner":"Vello", "type":"Avalik", "pot":"€104"},
	{"name":"Rahvaliiga","members":"100","owner":"Betfield", "type":"Avalik", "pot":"€100"},
	{"name":"Mudaliiga","members":"13","owner":"Karpo Korõtko", "type":"Privaatne", "pot":"€1400"},
	{"name":"Sopaliiga","members":"320","owner":"Priit Haasma", "type":"Privaatne", "pot":"€200"},
	{"name":"Meistriliiga","members":"700","owner":"Keegi Muu", "type":"Privaatne", "pot":"€2344"},
	{"name":"Võsaliiga","members":"1030","owner":"Vello", "type":"Avalik", "pot":"€104"},
	{"name":"Rahvaliiga","members":"100","owner":"Betfield", "type":"Avalik", "pot":"€100"},
	{"name":"Mudaliiga","members":"13","owner":"Karpo Korõtko", "type":"Privaatne", "pot":"€1400"},
	{"name":"Sopaliiga","members":"320","owner":"Priit Haasma", "type":"Privaatne", "pot":"€200"},
	{"name":"Meistriliiga","members":"700","owner":"Keegi Muu", "type":"Privaatne", "pot":"€2344"},
	{"name":"Võsaliiga","members":"1030","owner":"Vello", "type":"Avalik", "pot":"€104"}
	];

	if (Leagues.find().count() < 2){
		leagues.forEach(function(league){
			Leagues.insert({
				name:league.name,
				members:league.members,
				owner:league.owner,
				type:league.type,
				pot:league.pot
			});
		}); // end of foreach Leagues
		
		console.log("Startup Leagues: "+Leagues.find().count());
	
	} // end of if
});
