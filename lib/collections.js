// Collection containing all competitions
Competitions = new Mongo.Collection("competitions");

// Collection containing all teams
Teams = new Mongo.Collection("teams");

// Collection containing all players
Players = new Mongo.Collection("players");
//TODO: add national_team index to players
//in mongo: db.players.ensureIndex({"national_team": 1});
