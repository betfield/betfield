Meteor.startup(function () {

var fixtures = [{"competition":"EURO 2016","day":"Friday","date":"June 10","time":"20:00","ts":"2016-06-10T20:00:00","home_team":"France","away_team":"Romania","stadium":"Stade de France","city":"Paris","group":"A"},
{"competition":"EURO 2016","day":"Saturday","date":"June 11","time":"14:00","ts":"2016-06-11T14:00:00","home_team":"Albania","away_team":"Switzerland","stadium":"Stade Bollaert-Delelis","city":"Lens","group":"A"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 15","time":"17:00","ts":"2016-06-15T17:00:00","home_team":"Romania","away_team":"Switzerland","stadium":"Parc des Princes","city":"Paris","group":"A"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 15","time":"20:00","ts":"2016-06-15T20:00:00","home_team":"France","away_team":"Albania","stadium":"Stade Velodrome","city":"Marseille","group":"A"},
{"competition":"EURO 2016","day":"Sunday","date":"June 19","time":"20:00","ts":"2016-06-19T20:00:00","home_team":"Romania","away_team":"Albania","stadium":"Stade de Lyon","city":"Lyon","group":"A"},
{"competition":"EURO 2016","day":"Sunday","date":"June 19","time":"20:00","ts":"2016-06-19T20:00:00","home_team":"Switzerland","away_team":"France","stadium":"Stade Pierre Mauroy","city":"Lille","group":"A"},
{"competition":"EURO 2016","day":"Saturday","date":"June 11","time":"17:00","ts":"2016-06-11T17:00:00","home_team":"Wales","away_team":"Slovakia","stadium":"Stade de Bordeaux","city":"Bordeaux","group":"B"},
{"competition":"EURO 2016","day":"Saturday","date":"June 11","time":"20:00","ts":"2016-06-11T20:00:00","home_team":"England","away_team":"Russia","stadium":"Stade Velodrome","city":"Marseille","group":"B"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 15","time":"14:00","ts":"2016-06-15T14:00:00","home_team":"Russia","away_team":"Slovakia","stadium":"Stade Pierre Mauroy","city":"Lille","group":"B"},
{"competition":"EURO 2016","day":"Thursday","date":"June 16","time":"14:00","ts":"2016-06-16T14:00:00","home_team":"England","away_team":"Wales","stadium":"Stade Bollaert-Delelis","city":"Lens","group":"B"},
{"competition":"EURO 2016","day":"Monday","date":"June 20","time":"20:00","ts":"2016-06-20T20:00:00","home_team":"Russia","away_team":"Wales","stadium":"Stadium de Toulouse","city":"Toulouse","group":"B"},
{"competition":"EURO 2016","day":"Monday","date":"June 20","time":"20:00","ts":"2016-06-20T20:00:00","home_team":"Slovakia","away_team":"England","stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"B"},
{"competition":"EURO 2016","day":"Sunday","date":"June 12","time":"17:00","ts":"2016-06-12T17:00:00","home_team":"Poland","away_team":"Northern Ireland","stadium":"Stade de Nice","city":"Nice","group":"C"},
{"competition":"EURO 2016","day":"Sunday","date":"June 12","time":"20:00","ts":"2016-06-12T20:00:00","home_team":"Germany","away_team":"Ukraine","stadium":"Stade Pierre Mauroy","city":"Lille","group":"C"},
{"competition":"EURO 2016","day":"Thursday","date":"June 16","time":"17:00","ts":"2016-06-16T17:00:00","home_team":"Ukraine","away_team":"Northern Ireland","stadium":"Stade de Lyon","city":"Lyon","group":"C"},
{"competition":"EURO 2016","day":"Thursday","date":"June 16","time":"20:00","ts":"2016-06-16T20:00:00","home_team":"Germany","away_team":"Poland","stadium":"Stade de France","city":"Paris","group":"C"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"17:00","ts":"2016-06-21T17:00:00","home_team":"Ukraine","away_team":"Poland","stadium":"Stade Velodrome","city":"Marseille","group":"C"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"17:00","ts":"2016-06-21T17:00:00","home_team":"Northern Ireland","away_team":"Germany","stadium":"Parc des Princes","city":"Paris","group":"C"},
{"competition":"EURO 2016","day":"Sunday","date":"June 12","time":"14:00","ts":"2016-06-12T14:00:00","home_team":"Turkey","away_team":"Croatia","stadium":"Parc des Princes","city":"Paris","group":"D"},
{"competition":"EURO 2016","day":"Monday","date":"June 13","time":"14:00","ts":"2016-06-13T14:00:00","home_team":"Spain","away_team":"Czech Republic","stadium":"Stadium de Toulouse","city":"Toulouse","group":"D"},
{"competition":"EURO 2016","day":"Friday","date":"June 17","time":"17:00","ts":"2016-06-17T17:00:00","home_team":"Czech Republic","away_team":"Croatia","stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"D"},
{"competition":"EURO 2016","day":"Friday","date":"June 17","time":"20:00","ts":"2016-06-17T20:00:00","home_team":"Spain","away_team":"Turkey","stadium":"Stade de Nice","city":"Nice","group":"D"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"20:00","ts":"2016-06-21T20:00:00","home_team":"Czech Republic","away_team":"Turkey","stadium":"Stade Bollaert-Delelis","city":"Lens","group":"D"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 21","time":"20:00","ts":"2016-06-21T20:00:00","home_team":"Croatia","away_team":"Spain","stadium":"Stade de Bordeaux","city":"Bordeaux","group":"D"},
{"competition":"EURO 2016","day":"Monday","date":"June 13","time":"17:00","ts":"2016-06-13T17:00:00","home_team":"Republic of Ireland","away_team":"Sweden","stadium":"Stade de France","city":"Paris","group":"E"},
{"competition":"EURO 2016","day":"Monday","date":"June 13","time":"20:00","ts":"2016-06-13T20:00:00","home_team":"Belgium","away_team":"Italy","stadium":"Stade de Lyon","city":"Lyon","group":"E"},
{"competition":"EURO 2016","day":"Friday","date":"June 17","time":"14:00","ts":"2016-06-17T14:00:00","home_team":"Italy","away_team":"Sweden","stadium":"Stadium de Toulouse","city":"Toulouse","group":"E"},
{"competition":"EURO 2016","day":"Saturday","date":"June 18","time":"14:00","ts":"2016-06-18T14:00:00","home_team":"Belgium","away_team":"Republic of Ireland","stadium":"Stade de Bordeaux","city":"Bordeaux","group":"E"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"20:00","ts":"2016-06-22T20:00:00","home_team":"Italy","away_team":"Republic of Ireland","stadium":"Stade Pierre Mauroy","city":"Lille","group":"E"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"20:00","ts":"2016-06-22T20:00:00","home_team":"Sweden","away_team":"Belgium","stadium":"Stade de Nice","city":"Nice","group":"E"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 14","time":"17:00","ts":"2016-06-14T17:00:00","home_team":"Austria","away_team":"Hungary","stadium":"Stade de Bordeaux","city":"Bordeaux","group":"F"},
{"competition":"EURO 2016","day":"Tuesday","date":"June 14","time":"20:00","ts":"2016-06-14T20:00:00","home_team":"Portugal","away_team":"Iceland","stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"F"},
{"competition":"EURO 2016","day":"Saturday","date":"June 18","time":"17:00","ts":"2016-06-18T17:00:00","home_team":"Iceland","away_team":"Hungary","stadium":"Stade Velodrome","city":"Marseille","group":"F"},
{"competition":"EURO 2016","day":"Saturday","date":"June 18","time":"20:00","ts":"2016-06-18T20:00:00","home_team":"Portugal","away_team":"Austria","stadium":"Parc des Princes","city":"Paris","group":"F"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"17:00","ts":"2016-06-22T17:00:00","home_team":"Iceland","away_team":"Austria","stadium":"Stade de France","city":"Paris","group":"F"},
{"competition":"EURO 2016","day":"Wednesday","date":"June 22","time":"17:00","ts":"2016-06-22T17:00:00","home_team":"Hungary","away_team":"Portugal","stadium":"Stade de Lyon","city":"Lyon","group":"F"},
{"competition":"EURO 2016","day":"Saturday","date":"June 25","time":"14:00","ts":"2016-06-25T14:00:00","home_team":"Runner-up Group A","away_team":"Runner-up C","stadium":"TBD","city":"St-Etienne","group":"Last 16"},
{"competition":"EURO 2016","day":"Saturday","date":"June 25","time":"20:00","ts":"2016-06-25T20:00:00","home_team":"Winner D","away_team":"Third-place B/E/F","stadium":"TBD","city":"Lens","group":"Last 16"},
{"competition":"EURO 2016","day":"Saturday","date":"June 25","time":"17:00","ts":"2016-06-25T17:00:00","home_team":"Winner B","away_team":"Third-place A/C/D","stadium":"TBD","city":"Paris","group":"Last 16"},
{"competition":"EURO 2016","day":"Sunday","date":"June 26","time":"20:00","ts":"2016-06-26T20:00:00","home_team":"Winner F","away_team":"Runner-up E","stadium":"TBD","city":"Toulouse","group":"Last 16"},
{"competition":"EURO 2016","day":"Sunday","date":"June 26","time":"17:00","ts":"2016-06-26T17:00:00","home_team":"Winner C","away_team":"Third-place A/B/F","stadium":"TBD","city":"Lille ","group":"Last 16"},
{"competition":"EURO 2016","day":"Sunday","date":"June 26","time":"14:00","ts":"2016-06-26T14:00:00","home_team":"Winner A","away_team":"Third-place C/D/E","stadium":"TBD","city":"Lyon","group":"Last 16"},
{"competition":"EURO 2016","day":"Monday","date":"June 27","time":"17:00","ts":"2016-06-27T17:00:00","home_team":"Winner E","away_team":"Runner-up D","stadium":"TBD","city":"St-Denis ","group":"Last 16"},
{"competition":"EURO 2016","day":"Monday","date":"June 27","time":"20:00","ts":"2016-06-27T20:00:00","home_team":"Runner-up B","away_team":"Runner-up F","stadium":"TBD","city":"Nice","group":"Last 16"},
{"competition":"EURO 2016","day":"Thursday","date":"June 30","time":"20:00","ts":"2016-06-30T20:00:00","home_team":"Winner Match 1","away_team":"Winner Match 2","stadium":"TBD","city":"Marseille","group":"QF"},
{"competition":"EURO 2016","day":"Friday","date":"July 1","time":"20:00","ts":"2016-07-1T20:00:00","home_team":"Winner Match 3","away_team":"Winner Match 4","stadium":"TBD","city":"Lille","group":"QF"},
{"competition":"EURO 2016","day":"Saturday","date":"July 2","time":"20:00","ts":"2016-07-2T20:00:00","home_team":"Winner Match 5","away_team":"Winner Match 6","stadium":"TBD","city":"Bordeaux","group":"QF"},
{"competition":"EURO 2016","day":"Sunday","date":"July 3","time":"20:00","ts":"2016-07-3T20:00:00","home_team":"Winner Match 7","away_team":"Winner Match 8","stadium":"TBD","city":"St-Denis","group":"QF"},
{"competition":"EURO 2016","day":"Wednesday","date":"July 6","time":"20:00","ts":"2016-07-6T20:00:00","home_team":"Winner QF1","away_team":"Winner QF2","stadium":"TBD","city":"Lyon  ","group":"SF"},
{"competition":"EURO 2016","day":"Thursday","date":"July 7","time":"20:00","ts":"2016-07-7T20:00:00","home_team":"Winner QF3","away_team":"Winner QF4","stadium":"TBD","city":"Marseille ","group":"SF"},
{"competition":"EURO 2016","day":"Sunday","date":"July 10","time":"20:00","ts":"2016-07-10T20:00:00","home_team":"Winner SF1","away_team":"Winner SF2","stadium":"TBD","city":"St-Denis","group":"F"}]

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
});

