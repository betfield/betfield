// Collection containing all competitions
Fixtures = new Mongo.Collection("fixtures");

// Collection containing all teams
Teams = new Mongo.Collection("teams");

// Collection containing all players
Players = new Mongo.Collection("players");
//TODO: add national_team index to players
//in mongo: db.players.ensureIndex({"national_team": 1});

// Collection containing all competitions
Leagues = new Mongo.Collection("leagues");

// Collection containing all predictions
Predictions = new Mongo.Collection("predictions");

/*
// Function for disabling any data modification 
// from the client for the specified collection
function disableAllowDenyClient(collection) {
	collection.allow({
		insert() { return false; },
	  	update() { return false; },
	  	remove() { return false; }
	});

	collection.deny({
	  	insert() { return true; },
	  	update() { return true; },
	  	remove() { return true; }
	});
};
*/
