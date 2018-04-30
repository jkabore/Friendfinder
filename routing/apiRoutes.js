var path = require('path');
// Import the list of friend entries
var friends = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    
  
  
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
   
    // ---------------------------------------------------------------------------
  
    app.post("/api/friends", function(req, res) {
      // Note the code here. Our "server" will respond to requests 
      console.log('userInput = ' + JSON.stringify(userInput));
      // req.body is available since we're using the body-parser middleware
      var userInput 	= req.body;
		var userName 	= userInput.name;
		var userPhoto 	= userInput.photo;
        var userScores 	= userInput.scores;
        var difference=0;
        var match={
            name:"",
            photo:""
        };
        for(var i=0;i<friends.length;i++){
            console.log(friends[i]);
        }
        for (var j=0; j< friends[i].scores[j]; j++){
            difference+= Math.abs(parseInt(userInput[j]) - parseInt(friends[i].scores[j]));
            if(difference<=0){
               match.name = friends[i].name;
					match.photo = friends[i].photo;
					
            }

        }
        friends.push(userInput);
        res.json(match)
        
     
      })}