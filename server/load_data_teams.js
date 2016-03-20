Meteor.startup(function () {

var teams = [{"name":"France","code":"FRA","group":"A"},
{"name":"Romania","code":"ROU","group":"A"},
{"name":"Albania","code":"ALB","group":"A"},
{"name":"Switzerland","code":"SUI","group":"A"},
{"name":"England","code":"ENG","group":"B"},
{"name":"Russia","code":"RUS","group":"B"},
{"name":"Wales","code":"WAL","group":"B"},
{"name":"Slovakia","code":"SVK","group":"B"},
{"name":"Germany","code":"GER","group":"C"},
{"name":"Ukraine","code":"UKR","group":"C"},
{"name":"Poland","code":"POL","group":"C"},
{"name":"Northern Ireland","code":"NIR","group":"C"},
{"name":"Spain","code":"ESP","group":"D"},
{"name":"Czech Republic","code":"CZE","group":"D"},
{"name":"Turkey","code":"TUR","group":"D"},
{"name":"Croatia","code":"CRO","group":"D"},
{"name":"Belgium","code":"BEL","group":"E"},
{"name":"Italy","code":"ITA","group":"E"},
{"name":"Republic of Ireland","code":"IRL","group":"E"},
{"name":"Sweden","code":"SWE","group":"E"},
{"name":"Portugal","code":"POR","group":"F"},
{"name":"Iceland","code":"ISL","group":"F"},
{"name":"Austria","code":"AUT","group":"F"},
{"name":"Hungary","code":"HUN","group":"F"}]

	if (Teams.find().count() != 24){
		teams.forEach(function(team){
			Teams.insert({
				name:team.name,
				code:team.code,
				group:team.group
			});
		}); // end of foreach Teams
		
		console.log("Startup Teams: "+Teams.find().count());
	
	} // end of if
});

