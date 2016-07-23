var friends = require('../data/friends.js');

module.exports = function (app){

	app.get('/api/friends', function(req,res){
		res.json(friends);
	});

	app.post('/api/friends', function(req,res){
		var newUser = req.body;

		var compatibleFriend;
		var compatibleFriendDiff = 1000;

		for (i = 0; i < friends.length; i++){
			var totalDiff = 0;
			//console.log(friends[i]);
			for(j = 0; j < friends[i].scores.length; j++){
				totalDiff += Math.abs(newUser.scores[j] - friends[i].scores[j]);
				console.log(totalDiff);
			}

			if (totalDiff < compatibleFriendDiff){
				compatibleFriendDiff = totalDiff;
				compatibleFriend = friends[i];
			}
		}
		friends.push(newUser);
		console.log(compatibleFriend);
		res.json(compatibleFriend);
	});

}
