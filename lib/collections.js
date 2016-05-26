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

// Collection containing user points
Points = new Mongo.Collection("points");

/*Predictions.attachSchema(new SimpleSchema({
	"userId": {
		type: String
	},
	"fixture.result.homeScore": {
		type: Number,
		min: 0,
		max: 99,
		optional: true
	},
	"fixture.result.awayScore": {
		type: Number,
		min: 0,
		max: 99,
		optional: true
	},
	// Force value to be current date (on server) upon update
  	// and don't allow it to be set upon insert.
  	"updatedAt": {
    	type: Date,
    	autoValue: function() {
      		if (this.isUpdate) {
        		return new Date();
      		}
    	},
    	denyInsert: true,
    	optional: true
  	}
}));
*/

