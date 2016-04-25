// ==========================================================
	//DEPENDENCIES
		var express = require('express');
		var bodyParser = require('body-parser');
		var path = require('path');


// ==========================================================
	//CONFIGURE THE EXPRESS SERVER
		var app = express(); 	//DECLARES AN EXPRESS SERVER
		var PORT = process.env.PORT || 3000;  //DECLARES THE PORT 


// ==========================================================
	//SERVE CONTENT FROM THE 'PUBLIC' FOLDER		
		var staticContentFolder;
		staticContentFolder = __dirname + '/public';

		app.use(express.static(staticContentFolder));


// ==========================================================

	//HELPS SERVER INTERPRET DATA SENT TO IT
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.text());
		app.use(bodyParser.json({type:'application/vnd.api+json'}));


// ==========================================================

	//SET UP THE ROUTES
		require('./app/routing/api-routes.js')(app);
		require('./app/routing/html-routes.js')(app);
		


// ==========================================================
	//	SET UP THE LISTENER
		app.listen(PORT, function(){
			console.log("App is listening on PORT:" + PORT);
		});

