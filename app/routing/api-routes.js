
// ==========================================================

	//DEPENDENCIES
		var friendList = require('../data/friends.js');




// ==========================================================

	//ROUTING

	module.exports = function(app){

		//WHEN MY APP IS ASKED TO GET "/api/friends"...
		app.get('/api/friends', function (req, res){
			res.json(friendList);
		});

		//WHEN MY APP IS ASKED TO POST TO '/api/friends'...
		app.post('/api/friends', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 

		//CODE OUT THE COMPARISON HERE
		var user = req.body;
		var name = req.body.name;
		var img = req.body.photo;

		var userScores = req.body.scores;
			console.log(userScores);

		var userScores1 = req.body.scores[0];
			console.log("User Score 1: " + userScores1);

		for (var i = 0; i < friendList.length; i++) {
			console.log(friendList[i].scores);
		};


			friendList.push(req.body);
			res.json(true); // KEY LINE
		

	});
};