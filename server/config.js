ServiceConfiguration.configurations.remove({
	service: "facebook"
});

ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "1767392246824711",
	secret: "acc7d1a6dafefc0e524c72042d3ac46d"
});

console.log("Facebook login configuration inserted");

ServiceConfiguration.configurations.remove({
	service:'google'
});

ServiceConfiguration.configurations.insert({
	service:'google',
	clientId:'964360777763-io7s738uh938a7nn6svvnrq7csd0o014.apps.googleusercontent.com',
  	secret: 'VK-3CxICVvHP-YZLzLu5UFS7'
});

console.log("Google login configuration inserted");

ServiceConfiguration.configurations.remove({
	service:'twitter'
});

ServiceConfiguration.configurations.insert({
	service:'twitter',
	consumerKey:'2GvvTpv2UCTXguOuNrnMyDlRR',
  	secret: 'LJ1VDzHgYU0vh8Tx01oGiPyOPeo1BbIpwGSVPm9oGt4HPWFSTp'
});

console.log("Twitter login configuration inserted");

/*

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
    
    */