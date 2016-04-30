Meteor.startup(function () {

var fixtures = [{"competition":"EURO 2016","day":"Friday","date":"June 10","time":"19:00","ts":"2016-06-10T19:00:00","home_team":{"name":"France","code":"FRA","group":"A"},"away_team":{"name":"Romania","code":"ROU","group":"A"},"stadium":"Stade de France","city":"Paris","group":"A"},
{"competition":"EURO 2016","day":"Saturday","date":"June 11","time":"13:00","ts":"2016-06-11T13:00:00","home_team":{"name":"Albania","code":"ALB","group":"A"},"away_team":{"name":"Switzerland","code":"SUI","group":"A"},"stadium":"Stade Bollaert-Delelis","city":"Lens","group":"A"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 15","time":"16:00","ts":"2016-06-15T16:00:00","home_team":{"name":"Romania","code":"ROU","group":"A"},"away_team":{"name":"Switzerland","code":"SUI","group":"A"},"stadium":"Parc des Princes","city":"Paris","group":"A"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 15","time":"19:00","ts":"2016-06-15T19:00:00","home_team":{"name":"France","code":"FRA","group":"A"},"away_team":{"name":"Albania","code":"ALB","group":"A"},"stadium":"Stade Velodrome","city":"Marseille","group":"A"},
{"competition":"EURO 2016","day":"Sunday","date":"June 19","time":"19:00","ts":"2016-06-19T19:00:00","home_team":{"name":"Romania","code":"ROU","group":"A"},"away_team":{"name":"Albania","code":"ALB","group":"A"},"stadium":"Stade de Lyon","city":"Lyon","group":"A"},
{"competition":"EURO 2016","day":"Sunday","date":"June 19","time":"19:00","ts":"2016-06-19T19:00:00","home_team":{"name":"Switzerland","code":"SUI","group":"A"},"away_team":{"name":"France","code":"FRA","group":"A"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"A"},
{"competition":"EURO 2016","day":"Saturday","date":"June 11","time":"16:00","ts":"2016-06-11T16:00:00","home_team":{"name":"Wales","code":"WAL","group":"B"},"away_team":{"name":"Slovakia","code":"SVK","group":"B"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"B"},
{"competition":"EURO 2016","day":"Saturday","date":"June 11","time":"19:00","ts":"2016-06-11T19:00:00","home_team":{"name":"England","code":"ENG","group":"B"},"away_team":{"name":"Russia","code":"RUS","group":"B"},"stadium":"Stade Velodrome","city":"Marseille","group":"B"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 15","time":"13:00","ts":"2016-06-15T13:00:00","home_team":{"name":"Russia","code":"RUS","group":"B"},"away_team":{"name":"Slovakia","code":"SVK","group":"B"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"B"},
{"competition":"EURO 2016","day":"Thursday","date":"June 16","time":"13:00","ts":"2016-06-16T13:00:00","home_team":{"name":"England","code":"ENG","group":"B"},"away_team":{"name":"Wales","code":"WAL","group":"B"},"stadium":"Stade Bollaert-Delelis","city":"Lens","group":"B"},
{"competition":"EURO 2016","day":"Monday","date":"June 20","time":"19:00","ts":"2016-06-20T19:00:00","home_team":{"name":"Russia","code":"RUS","group":"B"},"away_team":{"name":"Wales","code":"WAL","group":"B"},"stadium":"Stadium de Toulouse","city":"Toulouse","group":"B"},
{"competition":"EURO 2016","day":"Monday","date":"June 20","time":"19:00","ts":"2016-06-20T19:00:00","home_team":{"name":"Slovakia","code":"SVK","group":"B"},"away_team":{"name":"England","code":"ENG","group":"B"},"stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"B"},
{"competition":"EURO 2016","day":"Sunday","date":"June 12","time":"16:00","ts":"2016-06-12T16:00:00","home_team":{"name":"Poland","code":"POL","group":"C"},"away_team":{"name":"Northern Ireland","code":"NIR","group":"C"},"stadium":"Stade de Nice","city":"Nice","group":"C"},
{"competition":"EURO 2016","day":"Sunday","date":"June 12","time":"19:00","ts":"2016-06-12T19:00:00","home_team":{"name":"Germany","code":"GER","group":"C"},"away_team":{"name":"Ukraine","code":"UKR","group":"C"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"C"},
{"competition":"EURO 2016","day":"Thursday","date":"June 16","time":"16:00","ts":"2016-06-16T16:00:00","home_team":{"name":"Ukraine","code":"UKR","group":"C"},"away_team":{"name":"Northern Ireland","code":"NIR","group":"C"},"stadium":"Stade de Lyon","city":"Lyon","group":"C"},
{"competition":"EURO 2016","day":"Thursday","date":"June 16","time":"19:00","ts":"2016-06-16T19:00:00","home_team":{"name":"Germany","code":"GER","group":"C"},"away_team":{"name":"Poland","code":"POL","group":"C"},"stadium":"Stade de France","city":"Paris","group":"C"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"16:00","ts":"2016-06-21T16:00:00","home_team":{"name":"Ukraine","code":"UKR","group":"C"},"away_team":{"name":"Poland","code":"POL","group":"C"},"stadium":"Stade Velodrome","city":"Marseille","group":"C"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"16:00","ts":"2016-06-21T16:00:00","home_team":{"name":"Northern Ireland","code":"NIR","group":"C"},"away_team":{"name":"Germany","code":"GER","group":"C"},"stadium":"Parc des Princes","city":"Paris","group":"C"},
{"competition":"EURO 2016","day":"Sunday","date":"June 12","time":"13:00","ts":"2016-06-12T13:00:00","home_team":{"name":"Turkey","code":"TUR","group":"D"},"away_team":{"name":"Croatia","code":"CRO","group":"D"},"stadium":"Parc des Princes","city":"Paris","group":"D"},
{"competition":"EURO 2016","day":"Monday","date":"June 13","time":"13:00","ts":"2016-06-13T13:00:00","home_team":{"name":"Spain","code":"ESP","group":"D"},"away_team":{"name":"Czech Republic","code":"CZE","group":"D"},"stadium":"Stadium de Toulouse","city":"Toulouse","group":"D"},
{"competition":"EURO 2016","day":"Friday","date":"June 17","time":"16:00","ts":"2016-06-17T16:00:00","home_team":{"name":"Czech Republic","code":"CZE","group":"D"},"away_team":{"name":"Croatia","code":"CRO","group":"D"},"stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"D"},
{"competition":"EURO 2016","day":"Friday","date":"June 17","time":"19:00","ts":"2016-06-17T19:00:00","home_team":{"name":"Spain","code":"ESP","group":"D"},"away_team":{"name":"Turkey","code":"TUR","group":"D"},"stadium":"Stade de Nice","city":"Nice","group":"D"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"19:00","ts":"2016-06-21T19:00:00","home_team":{"name":"Czech Republic","code":"CZE","group":"D"},"away_team":{"name":"Turkey","code":"TUR","group":"D"},"stadium":"Stade Bollaert-Delelis","city":"Lens","group":"D"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"19:00","ts":"2016-06-21T19:00:00","home_team":{"name":"Croatia","code":"CRO","group":"D"},"away_team":{"name":"Spain","code":"ESP","group":"D"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"D"},
{"competition":"EURO 2016","day":"Monday","date":"June 13","time":"16:00","ts":"2016-06-13T16:00:00","home_team":{"name":"Republic of Ireland","code":"IRL","group":"E"},"away_team":{"name":"Sweden","code":"SWE","group":"E"},"stadium":"Stade de France","city":"Paris","group":"E"},
{"competition":"EURO 2016","day":"Monday","date":"June 13","time":"19:00","ts":"2016-06-13T19:00:00","home_team":{"name":"Belgium","code":"BEL","group":"E"},"away_team":{"name":"Italy","code":"ITA","group":"E"},"stadium":"Stade de Lyon","city":"Lyon","group":"E"},
{"competition":"EURO 2016","day":"Friday","date":"June 17","time":"13:00","ts":"2016-06-17T13:00:00","home_team":{"name":"Italy","code":"ITA","group":"E"},"away_team":{"name":"Sweden","code":"SWE","group":"E"},"stadium":"Stadium de Toulouse","city":"Toulouse","group":"E"},
{"competition":"EURO 2016","day":"Saturday","date":"June 18","time":"13:00","ts":"2016-06-18T13:00:00","home_team":{"name":"Belgium","code":"BEL","group":"E"},"away_team":{"name":"Republic of Ireland","code":"IRL","group":"E"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"E"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"19:00","ts":"2016-06-22T19:00:00","home_team":{"name":"Italy","code":"ITA","group":"E"},"away_team":{"name":"Republic of Ireland","code":"IRL","group":"E"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"E"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"19:00","ts":"2016-06-22T19:00:00","home_team":{"name":"Sweden","code":"SWE","group":"E"},"away_team":{"name":"Belgium","code":"BEL","group":"E"},"stadium":"Stade de Nice","city":"Nice","group":"E"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 14","time":"16:00","ts":"2016-06-14T16:00:00","home_team":{"name":"Austria","code":"AUT","group":"F"},"away_team":{"name":"Hungary","code":"HUN","group":"F"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"F"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 14","time":"19:00","ts":"2016-06-14T19:00:00","home_team":{"name":"Portugal","code":"POR","group":"F"},"away_team":{"name":"Iceland","code":"ISL","group":"F"},"stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"F"},
{"competition":"EURO 2016","day":"Saturday","date":"June 18","time":"16:00","ts":"2016-06-18T16:00:00","home_team":{"name":"Iceland","code":"ISL","group":"F"},"away_team":{"name":"Hungary","code":"HUN","group":"F"},"stadium":"Stade Velodrome","city":"Marseille","group":"F"},
{"competition":"EURO 2016","day":"Saturday","date":"June 18","time":"19:00","ts":"2016-06-18T19:00:00","home_team":{"name":"Portugal","code":"POR","group":"F"},"away_team":{"name":"Austria","code":"AUT","group":"F"},"stadium":"Parc des Princes","city":"Paris","group":"F"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"16:00","ts":"2016-06-22T16:00:00","home_team":{"name":"Iceland","code":"ISL","group":"F"},"away_team":{"name":"Austria","code":"AUT","group":"F"},"stadium":"Stade de France","city":"Paris","group":"F"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"16:00","ts":"2016-06-22T16:00:00","home_team":{"name":"Hungary","code":"HUN","group":"F"},"away_team":{"name":"Portugal","code":"POR","group":"F"},"stadium":"Stade de Lyon","city":"Lyon","group":"F"},
{"competition":"EURO 2016","day":"Saturday","date":"June 25","time":"13:00","ts":"2016-06-25T13:00:00","home_team":"Runner-up Group A","away_team":"Runner-up C","stadium":"TBD","city":"St-Etienne","group":"Last 16"},
{"competition":"EURO 2016","day":"Saturday","date":"June 25","time":"19:00","ts":"2016-06-25T19:00:00","home_team":"Winner D","away_team":"Third-place B/E/F","stadium":"TBD","city":"Lens","group":"Last 16"},
{"competition":"EURO 2016","day":"Saturday","date":"June 25","time":"16:00","ts":"2016-06-25T16:00:00","home_team":"Winner B","away_team":"Third-place A/C/D","stadium":"TBD","city":"Paris","group":"Last 16"},
{"competition":"EURO 2016","day":"Sunday","date":"June 26","time":"19:00","ts":"2016-06-26T19:00:00","home_team":"Winner F","away_team":"Runner-up E","stadium":"TBD","city":"Toulouse","group":"Last 16"},
{"competition":"EURO 2016","day":"Sunday","date":"June 26","time":"16:00","ts":"2016-06-26T16:00:00","home_team":"Winner C","away_team":"Third-place A/B/F","stadium":"TBD","city":"Lille ","group":"Last 16"},
{"competition":"EURO 2016","day":"Sunday","date":"June 26","time":"13:00","ts":"2016-06-26T13:00:00","home_team":"Winner A","away_team":"Third-place C/D/E","stadium":"TBD","city":"Lyon","group":"Last 16"},
{"competition":"EURO 2016","day":"Monday","date":"June 27","time":"16:00","ts":"2016-06-27T16:00:00","home_team":"Winner E","away_team":"Runner-up D","stadium":"TBD","city":"St-Denis ","group":"Last 16"},
{"competition":"EURO 2016","day":"Monday","date":"June 27","time":"19:00","ts":"2016-06-27T19:00:00","home_team":"Runner-up B","away_team":"Runner-up F","stadium":"TBD","city":"Nice","group":"Last 16"},
{"competition":"EURO 2016","day":"Thursday","date":"June 30","time":"19:00","ts":"2016-06-30T19:00:00","home_team":"Winner Match 1","away_team":"Winner Match 2","stadium":"TBD","city":"Marseille","group":"QF"},
{"competition":"EURO 2016","day":"Friday","date":"July 1","time":"19:00","ts":"2016-07-1T19:00:00","home_team":"Winner Match 3","away_team":"Winner Match 4","stadium":"TBD","city":"Lille","group":"QF"},
{"competition":"EURO 2016","day":"Saturday","date":"July 2","time":"19:00","ts":"2016-07-2T19:00:00","home_team":"Winner Match 5","away_team":"Winner Match 6","stadium":"TBD","city":"Bordeaux","group":"QF"},
{"competition":"EURO 2016","day":"Sunday","date":"July 3","time":"19:00","ts":"2016-07-3T19:00:00","home_team":"Winner Match 7","away_team":"Winner Match 8","stadium":"TBD","city":"St-Denis","group":"QF"},
{"competition":"EURO 2016","day":"Wednesday","date":"July 6","time":"19:00","ts":"2016-07-6T19:00:00","home_team":"Winner QF1","away_team":"Winner QF2","stadium":"TBD","city":"Lyon  ","group":"SF"},
{"competition":"EURO 2016","day":"Thursday","date":"July 7","time":"19:00","ts":"2016-07-7T19:00:00","home_team":"Winner QF3","away_team":"Winner QF4","stadium":"TBD","city":"Marseille ","group":"SF"},
{"competition":"EURO 2016","day":"Sunday","date":"July 10","time":"19:00","ts":"2016-07-10T19:00:00","home_team":"Winner SF1","away_team":"Winner SF2","stadium":"TBD","city":"St-Denis","group":"FN"}]

	if (Fixtures.find({competition:'EURO 2016'}).count() != 51){
		fixtures.forEach(function(fixture){
			Fixtures.insert({
				competition:fixture.competition,
				day:fixture.day,
				date:fixture.date,
				time:fixture.time,
				ts:fixture.ts,
				home_team:fixture.home_team,
				away_team:fixture.away_team,
				stadium:fixture.stadium,
				city:fixture.city,
				group:fixture.group
			});
		}); // end of foreach Fixtures
		
		console.log("Startup Fixtures: "+Fixtures.find().count());
	
	} // end of if
	
/*	Meteor.setInterval(function() {
    
		HTTP.call( 'GET', // Meteor.settings.public.RESULTS_FEED_API + //Meteor.settings.public.RESULTS_FEED_ACTIVE_LEAGUE + 
					"http://api.football-data.org/v1/fixtures/149434", {
			headers: {
				"X-Auth-Token": Meteor.settings.private.RESULTS_FEED_KEY
			},
			params: {
				
			}
		}, function( error, response ) {
			if ( error ) {
				console.log( error );
			} else {
				var fixtureSet = JSON.parse( response.content );
				//console.log(fixtureSet);
				
			}
		});

	}, 10000);
*/	
});

