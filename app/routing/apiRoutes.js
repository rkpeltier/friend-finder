var friends = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    post.get("/api/friends", function(req, res) {
      res.json(req.body.scores);

    var smallestCompScore = 99999;
    var smallestPerson;

  //looping thru old friends
  for (var i=0; i<oldFriends.length; i++) {
      
      var currentScore = 0;
      //compare each old friend with new friend
    for (var scoreIndex = 0; scoreIndex < 5; scoreIndex ++) {
        //modify current score
        currentScore = 
        currentScore + 
        //scores is in both objects - keep that in mind for comparisons, need like
        Math.abs(newFriend.scores[scoreIndex] - oldFriends[i].scores[scoreIndex]);
    }
    //update compareScores list
    if (currentScore < smallestCompScore) {
        smallestCompScore = currentScore;
        smallestPerson = oldFriends[i];
    }
  }
  friends.push(newFriend);

    });

}