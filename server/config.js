ServiceConfiguration.configurations.remove({
	service: "facebook"
});

ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "374620766038994",
	secret: "cbba896eba239233ef4e8144987cd103"
});

console.log("Facebook login configuration inserted");

ServiceConfiguration.configurations.remove({
	service:'google'
});

ServiceConfiguration.configurations.insert({
	service:'google',
	clientId:'1043124871222-a0c8k4205lfbj950orbkgofdkme3k1j1.apps.googleusercontent.com',
  	secret: 'x71UaNAa6b1UoLNmo2lyHjia'
});

console.log("Google login configuration inserted");


Router.route('/football-data.events', function() {
    this.response.setHeader( 'Access-Control-Allow-Origin', '*' );

        if ( this.request.method === "OPTIONS" ) {
            this.response.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
            this.response.setHeader( 'Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS' );
            this.response.end( 'Set OPTIONS.' );
        } else {
			console.log("yippikayee");
            console.log(this.request.body);
            this.response.statusCode=200;
            this.response.end();
            //API.handleRequest( this, 'pizza', this.request.method );
        }
    }, {where: 'server'});