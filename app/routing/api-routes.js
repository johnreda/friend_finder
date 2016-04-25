
// ==========================================================

	//DEPENDENCIES
		var path = require('path');
		var friendList = require('../data/friends.js');



// ==========================================================

	//ROUTING

	module.exports = function(app){


		app.get('/api/friends', function (req, res){
			res.json(friendList);
		});

	};