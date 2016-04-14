// Run this when the meteor app is started
Meteor.startup(function () {

	Logger = new Loggly({
		token: Meteor.settings.private.LOGGLEY_TOKEN,
		subdomain: Meteor.settings.public.LOGGLEY_SERVER,
		auth: {
			username: Meteor.settings.private.LOGGLEY_USER,
			password: Meteor.settings.private.LOGGLEY_PASS
		},

		// Optional: Tag to send with EVERY log message
		tags: ['betfield'],

		// Optional: logs will be stored in JSON format
		json: true
	});
	

	function getUserId() {
		var user = Meteor.userId();
				
		if (user == null || typeof user == 'undefined') {
			user = 'anonymous';
		}
		
		return user;
	}
	
	function convertMessage(message) {
		return message.toString().replace(/,/g, ' '); //useful if you hijack console.log
	}
	
	//just checking to see if the object exists-    
	if (Logger !== null && typeof Logger !== 'undefined') { 
		
		Meteor.methods({
			clientLog: function(message) {
				message = convertMessage(message);
				check(message, String);
				Logger.info(message, {user: getUserId()});
			},
			clientError: function(message, err) {
				message = convertMessage(message);
				err = convertMessage(err);
				check(message, String);
				Logger.error(message, {user: getUserId(), error: err});
			}
		});

	} else {
		console.error('SB.logger is not set - client is unable to send logs to server');
	};
	

	



	//TODO: Fill with correct data for teams
	//TODO: Move data to separate file
	var players = [
		{
			name:"Anthony Martial",
			age: "19",
			club:"Manchester United",
			national_team:"France"
		},
		{
			name:"Dimitry Payet",
			age: "26",
			club:"West Ham United",
			national_team:"France"
		},
		{
			name:"Karim Benzema",
			age: "29",
			club:"Real Madrid",
			national_team:"France"
		},
		{
			name:"Robert Lewandovski",
			age: "28",
			club:"Bayern Munich",
			national_team:"Poland"
		}
	]
	
	if (Players.find().count() == 0){
		//TODO: replace with foreach
		for (var i=0;i<4;i++){
			Players.insert({
				name:players[i].name,
				age:players[i].age,
				club:players[i].club,
				national_team:players[i].national_team
			});
		} // end of for inserting all Teams
		console.log("Startup Players: "+Players.find().count());
	} // end of 
/*	
	if (Competitions.find().count() == 0){
		Competitions.insert({
			name:"Euro 2016",
			type:"Tournament",
			//maximum document size is 16MB!
			groups:[
				{
					name:"A",
					teams:
						{
							name:"France",
							flag:"fra.png",
						},
						{
							name:"Poland",
							flag:"pol.png",
						},
						{
							name:"Albania",
							flag:"alb.png",
						},
						{
							name:"Iceland",
							flag:"isl.png",
						}
				},
				{
					name:"B",
					teams:
						{
							name:"Germany",
							flag:"ger.png",
						},
						{
							name:"Scotland",
							flag:"sco.png",
						},
						{
							name:"Malta",
							flag:"mlt.png",
						},
						{
							name:"Sweden",
							flag:"swe.png",
						}
				}
			],
			fixtures:{
				{
					home:"",
					away:"",
					date:"",
					result:
						{
							ft_home_score:"",
							ft_away_score:"",
							extra_time:"false",
							et_home_score:"",
							et_away_score:"",
							penalties:"false",
							pen_home_score:"",
							pen_away_score:"",
							created:new Date()
						}
				},
				{
					home:"",
					away:"",
					date:"",
					result:
						{
							ft_home_score:"",
							ft_away_score:"",
							extra_time:"false",
							et_home_score:"",
							et_away_score:"",
							penalties:"false",
							pen_home_score:"",
							pen_away_score:"",
							created:new Date()
						}
				}
			},
			table:{
				{
					pos:"1",
					team:"France",
					won:"0",
					drawn:"0",
					lost:"0",
					goals_for:"0",
					goals_against:"0",
					points:"0"
				},
				{
					pos:"2",
					team:"Poland",
					won:"0",
					drawn:"0",
					lost:"0",
					goals_for:"0",
					goals_against:"0",
					points:"0"
				}
			},
			created:new Date()
		});	
*/		
//	}// end of if have no competitions
});

