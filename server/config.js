ServiceConfiguration.configurations.remove({
	service: "facebook"
});

ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "374620766038994",
	secret: "cbba896eba239233ef4e8144987cd103"
});

console.log("Facebook login configuration inserted");