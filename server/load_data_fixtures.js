Meteor.startup(function () {

var fixtures = [{"competition":"EURO 2016","day":"Friday","date":"10 juuni","time":"19:00","ts":"2016-06-10T19:00:00","home_team":{"name":"Prantsusmaa","code":"FRA","group":"A"},"away_team":{"name":"Rumeenia","code":"ROU","group":"A"},"stadium":"Stade de Prantsusmaa","city":"Paris","group":"A","round":1},
{"competition":"EURO 2016","day":"Saturday","date":"11 juuni","time":"13:00","ts":"2016-06-11T13:00:00","home_team":{"name":"Albaania","code":"ALB","group":"A"},"away_team":{"name":"Šveits","code":"SUI","group":"A"},"stadium":"Stade Bollaert-Delelis","city":"Lens","group":"A","round":1},
{"competition":"EURO 2016","day":"Wednesday","date":"15 juuni","time":"16:00","ts":"2016-06-15T16:00:00","home_team":{"name":"Rumeenia","code":"ROU","group":"A"},"away_team":{"name":"Šveits","code":"SUI","group":"A"},"stadium":"Parc des Princes","city":"Paris","group":"A","round":2},
{"competition":"EURO 2016","day":"Wednesday","date":"15 juuni","time":"19:00","ts":"2016-06-15T19:00:00","home_team":{"name":"Prantsusmaa","code":"FRA","group":"A"},"away_team":{"name":"Albaania","code":"ALB","group":"A"},"stadium":"Stade Velodrome","city":"Marseille","group":"A","round":2},
{"competition":"EURO 2016","day":"Sunday","date":"19 juuni","time":"19:00","ts":"2016-06-19T19:00:00","home_team":{"name":"Rumeenia","code":"ROU","group":"A"},"away_team":{"name":"Albaania","code":"ALB","group":"A"},"stadium":"Stade de Lyon","city":"Lyon","group":"A","round":3},
{"competition":"EURO 2016","day":"Sunday","date":"19 juuni","time":"19:00","ts":"2016-06-19T19:00:00","home_team":{"name":"Šveits","code":"SUI","group":"A"},"away_team":{"name":"Prantsusmaa","code":"FRA","group":"A"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"A","round":3},
{"competition":"EURO 2016","day":"Saturday","date":"11 juuni","time":"16:00","ts":"2016-06-11T16:00:00","home_team":{"name":"Wales","code":"WAL","group":"B"},"away_team":{"name":"Slovakkia","code":"SVK","group":"B"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"B","round":1},
{"competition":"EURO 2016","day":"Saturday","date":"11 juuni","time":"19:00","ts":"2016-06-11T19:00:00","home_team":{"name":"Inglismaa","code":"ENG","group":"B"},"away_team":{"name":"Venemaa","code":"RUS","group":"B"},"stadium":"Stade Velodrome","city":"Marseille","group":"B","round":1},
{"competition":"EURO 2016","day":"Wednesday","date":"15 juuni","time":"13:00","ts":"2016-06-15T13:00:00","home_team":{"name":"Venemaa","code":"RUS","group":"B"},"away_team":{"name":"Slovakkia","code":"SVK","group":"B"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"B","round":2},
{"competition":"EURO 2016","day":"Thursday","date":"16 juuni","time":"13:00","ts":"2016-06-16T13:00:00","home_team":{"name":"Inglismaa","code":"ENG","group":"B"},"away_team":{"name":"Wales","code":"WAL","group":"B"},"stadium":"Stade Bollaert-Delelis","city":"Lens","group":"B","round":2},
{"competition":"EURO 2016","day":"Monday","date":"20 juuni","time":"19:00","ts":"2016-06-20T19:00:00","home_team":{"name":"Venemaa","code":"RUS","group":"B"},"away_team":{"name":"Wales","code":"WAL","group":"B"},"stadium":"Stadium de Toulouse","city":"Toulouse","group":"B","round":3},
{"competition":"EURO 2016","day":"Monday","date":"20 juuni","time":"19:00","ts":"2016-06-20T19:00:00","home_team":{"name":"Slovakkia","code":"SVK","group":"B"},"away_team":{"name":"Inglismaa","code":"ENG","group":"B"},"stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"B","round":3},
{"competition":"EURO 2016","day":"Sunday","date":"12 juuni","time":"16:00","ts":"2016-06-12T16:00:00","home_team":{"name":"Poola","code":"POL","group":"C"},"away_team":{"name":"Põhja Iirimaa","code":"NIR","group":"C"},"stadium":"Stade de Nice","city":"Nice","group":"C","round":1},
{"competition":"EURO 2016","day":"Sunday","date":"12 juuni","time":"19:00","ts":"2016-06-12T19:00:00","home_team":{"name":"Saksamaa","code":"GER","group":"C"},"away_team":{"name":"Ukraina","code":"UKR","group":"C"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"C","round":1},
{"competition":"EURO 2016","day":"Thursday","date":"16 juuni","time":"16:00","ts":"2016-06-16T16:00:00","home_team":{"name":"Ukraina","code":"UKR","group":"C"},"away_team":{"name":"Põhja Iirimaa","code":"NIR","group":"C"},"stadium":"Stade de Lyon","city":"Lyon","group":"C","round":2},
{"competition":"EURO 2016","day":"Thursday","date":"16 juuni","time":"19:00","ts":"2016-06-16T19:00:00","home_team":{"name":"Saksamaa","code":"GER","group":"C"},"away_team":{"name":"Poola","code":"POL","group":"C"},"stadium":"Stade de Prantsusmaa","city":"Paris","group":"C","round":2},
{"competition":"EURO 2016","day":"Tuesday","date":"21 juuni","time":"16:00","ts":"2016-06-21T16:00:00","home_team":{"name":"Ukraina","code":"UKR","group":"C"},"away_team":{"name":"Poola","code":"POL","group":"C"},"stadium":"Stade Velodrome","city":"Marseille","group":"C","round":3},
{"competition":"EURO 2016","day":"Tuesday","date":"21 juuni","time":"16:00","ts":"2016-06-21T16:00:00","home_team":{"name":"Põhja Iirimaa","code":"NIR","group":"C"},"away_team":{"name":"Saksamaa","code":"GER","group":"C"},"stadium":"Parc des Princes","city":"Paris","group":"C","round":3},
{"competition":"EURO 2016","day":"Sunday","date":"12 juuni","time":"13:00","ts":"2016-06-12T13:00:00","home_team":{"name":"Türgi","code":"TUR","group":"D"},"away_team":{"name":"Horvaatia","code":"CRO","group":"D"},"stadium":"Parc des Princes","city":"Paris","group":"D","round":1},
{"competition":"EURO 2016","day":"Monday","date":"13 juuni","time":"13:00","ts":"2016-06-13T13:00:00","home_team":{"name":"Hispaania","code":"ESP","group":"D"},"away_team":{"name":"Tšehhi","code":"CZE","group":"D"},"stadium":"Stadium de Toulouse","city":"Toulouse","group":"D","round":1},
{"competition":"EURO 2016","day":"Friday","date":"17 juuni","time":"16:00","ts":"2016-06-17T16:00:00","home_team":{"name":"Tšehhi","code":"CZE","group":"D"},"away_team":{"name":"Horvaatia","code":"CRO","group":"D"},"stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"D","round":2},
{"competition":"EURO 2016","day":"Friday","date":"17 juuni","time":"19:00","ts":"2016-06-17T19:00:00","home_team":{"name":"Hispaania","code":"ESP","group":"D"},"away_team":{"name":"Türgi","code":"TUR","group":"D"},"stadium":"Stade de Nice","city":"Nice","group":"D","round":2},
{"competition":"EURO 2016","day":"Tuesday","date":"21 juuni","time":"19:00","ts":"2016-06-21T19:00:00","home_team":{"name":"Tšehhi","code":"CZE","group":"D"},"away_team":{"name":"Türgi","code":"TUR","group":"D"},"stadium":"Stade Bollaert-Delelis","city":"Lens","group":"D","round":3},
{"competition":"EURO 2016","day":"Tuesday","date":"21 juuni","time":"19:00","ts":"2016-06-21T19:00:00","home_team":{"name":"Horvaatia","code":"CRO","group":"D"},"away_team":{"name":"Hispaania","code":"ESP","group":"D"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"D","round":3},
{"competition":"EURO 2016","day":"Monday","date":"13 juuni","time":"16:00","ts":"2016-06-13T16:00:00","home_team":{"name":"Iirimaa","code":"IRL","group":"E"},"away_team":{"name":"Rootsi","code":"SWE","group":"E"},"stadium":"Stade de Prantsusmaa","city":"Paris","group":"E","round":1},
{"competition":"EURO 2016","day":"Monday","date":"13 juuni","time":"19:00","ts":"2016-06-13T19:00:00","home_team":{"name":"Belgia","code":"BEL","group":"E"},"away_team":{"name":"Itaalia","code":"ITA","group":"E"},"stadium":"Stade de Lyon","city":"Lyon","group":"E","round":1},
{"competition":"EURO 2016","day":"Friday","date":"17 juuni","time":"13:00","ts":"2016-06-17T13:00:00","home_team":{"name":"Itaalia","code":"ITA","group":"E"},"away_team":{"name":"Rootsi","code":"SWE","group":"E"},"stadium":"Stadium de Toulouse","city":"Toulouse","group":"E","round":2},
{"competition":"EURO 2016","day":"Saturday","date":"18 juuni","time":"13:00","ts":"2016-06-18T13:00:00","home_team":{"name":"Belgia","code":"BEL","group":"E"},"away_team":{"name":"Iirimaa","code":"IRL","group":"E"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"E","round":2},
{"competition":"EURO 2016","day":"Wednesday","date":"22 juuni","time":"19:00","ts":"2016-06-22T19:00:00","home_team":{"name":"Itaalia","code":"ITA","group":"E"},"away_team":{"name":"Iirimaa","code":"IRL","group":"E"},"stadium":"Stade Pierre Mauroy","city":"Lille","group":"E","round":3},
{"competition":"EURO 2016","day":"Wednesday","date":"22 juuni","time":"19:00","ts":"2016-06-22T19:00:00","home_team":{"name":"Rootsi","code":"SWE","group":"E"},"away_team":{"name":"Belgia","code":"BEL","group":"E"},"stadium":"Stade de Nice","city":"Nice","group":"E","round":3},
{"competition":"EURO 2016","day":"Tuesday","date":"14 juuni","time":"16:00","ts":"2016-06-14T16:00:00","home_team":{"name":"Austria","code":"AUT","group":"F"},"away_team":{"name":"Ungari","code":"HUN","group":"F"},"stadium":"Stade de Bordeaux","city":"Bordeaux","group":"F","round":1},
{"competition":"EURO 2016","day":"Tuesday","date":"14 juuni","time":"19:00","ts":"2016-06-14T19:00:00","home_team":{"name":"Portugal","code":"POR","group":"F"},"away_team":{"name":"Island","code":"ISL","group":"F"},"stadium":"Stade Geoffroy Guichard","city":"St Etienne","group":"F","round":1},
{"competition":"EURO 2016","day":"Saturday","date":"18 juuni","time":"16:00","ts":"2016-06-18T16:00:00","home_team":{"name":"Island","code":"ISL","group":"F"},"away_team":{"name":"Ungari","code":"HUN","group":"F"},"stadium":"Stade Velodrome","city":"Marseille","group":"F","round":2},
{"competition":"EURO 2016","day":"Saturday","date":"18 juuni","time":"19:00","ts":"2016-06-18T19:00:00","home_team":{"name":"Portugal","code":"POR","group":"F"},"away_team":{"name":"Austria","code":"AUT","group":"F"},"stadium":"Parc des Princes","city":"Paris","group":"F","round":2},
{"competition":"EURO 2016","day":"Wednesday","date":"22 juuni","time":"16:00","ts":"2016-06-22T16:00:00","home_team":{"name":"Island","code":"ISL","group":"F"},"away_team":{"name":"Austria","code":"AUT","group":"F"},"stadium":"Stade de Prantsusmaa","city":"Paris","group":"F","round":3},
{"competition":"EURO 2016","day":"Wednesday","date":"22 juuni","time":"16:00","ts":"2016-06-22T16:00:00","home_team":{"name":"Ungari","code":"HUN","group":"F"},"away_team":{"name":"Portugal","code":"POR","group":"F"},"stadium":"Stade de Lyon","city":"Lyon","group":"F","round":3},
{"competition":"EURO 2016","day":"Saturday","date":"25 juuni","time":"13:00","ts":"2016-06-25T13:00:00","home_team":"A2","away_team":"C2","stadium":"TBD","city":"St-Etienne","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Saturday","date":"25 juuni","time":"19:00","ts":"2016-06-25T19:00:00","home_team":"D1","away_team":"BEF3","stadium":"TBD","city":"Lens","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Saturday","date":"25 juuni","time":"16:00","ts":"2016-06-25T16:00:00","home_team":"B1","away_team":"ACD3","stadium":"TBD","city":"Paris","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Sunday","date":"26 juuni","time":"19:00","ts":"2016-06-26T19:00:00","home_team":"F1","away_team":"E2","stadium":"TBD","city":"Toulouse","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Sunday","date":"26 juuni","time":"16:00","ts":"2016-06-26T16:00:00","home_team":"C1","away_team":"ABF3","stadium":"TBD","city":"Lille","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Sunday","date":"26 juuni","time":"13:00","ts":"2016-06-26T13:00:00","home_team":"A1","away_team":"CDE3","stadium":"TBD","city":"Lyon","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Monday","date":"27 juuni","time":"16:00","ts":"2016-06-27T16:00:00","home_team":"E1","away_team":"D2","stadium":"TBD","city":"St-Denis","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Monday","date":"27 juuni","time":"19:00","ts":"2016-06-27T19:00:00","home_team":"B2","away_team":"F2","stadium":"TBD","city":"Nice","group":"Last 16","round":4},
{"competition":"EURO 2016","day":"Thursday","date":"30 juuni","time":"19:00","ts":"2016-06-30T19:00:00","home_team":"Q1","away_team":"Q2","stadium":"TBD","city":"Marseille","group":"QF","round":5},
{"competition":"EURO 2016","day":"Friday","date":"01 juuli","time":"19:00","ts":"2016-07-1T19:00:00","home_team":"Q3","away_team":"Q4","stadium":"TBD","city":"Lille","group":"QF","round":5},
{"competition":"EURO 2016","day":"Saturday","date":"02 juuli","time":"19:00","ts":"2016-07-2T19:00:00","home_team":"Q5","away_team":"Q6","stadium":"TBD","city":"Bordeaux","group":"QF","round":5},
{"competition":"EURO 2016","day":"Sunday","date":"03 juuli","time":"19:00","ts":"2016-07-3T19:00:00","home_team":"Q7","away_team":"Q8","stadium":"TBD","city":"St-Denis","group":"QF","round":5},
{"competition":"EURO 2016","day":"Wednesday","date":"06 juuli","time":"19:00","ts":"2016-07-6T19:00:00","home_team":"S1","away_team":"S2","stadium":"TBD","city":"Lyon  ","group":"SF","round":6},
{"competition":"EURO 2016","day":"Thursday","date":"07 juuli","time":"19:00","ts":"2016-07-7T19:00:00","home_team":"S3","away_team":"S4","stadium":"TBD","city":"Marseille","group":"SF","round":6},
{"competition":"EURO 2016","day":"Sunday","date":"10 juuli","time":"19:00","ts":"2016-07-10T19:00:00","home_team":"W1","away_team":"W2","stadium":"TBD","city":"St-Denis","group":"FI","round":7}]

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
				group:fixture.group,
				round:fixture.round,
				status: "disabled"
			});
		}); // end of foreach Fixtures
		
		console.log("Startup Fixtures: "+Fixtures.find().count());
	
	} // end of if
	
});

