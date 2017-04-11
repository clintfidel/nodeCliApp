let tweetBotJs = require('twit');

let Twitter = new  tweetBotJs({
    consumer_key:         'yVR7czqz0wkrixWP4rLzYYvRm' //  Consumer Key
  , consumer_secret:      'vbZlrJ3d6MsOIPG7bIVHo4OJnK8VJE1v1jAHfsDWxy21gpYrGb' //  Consumer Secret
  , access_token:         '1382063460-nFQvtrzoJRtmtVXd4PuJWZNkHzmHW7GsepFiLM1' // Access Token
  , access_token_secret:  'qjEX6YfWs8CshKmrcFKGlyUxMouDYTLweoNmMfMLsIrDx' //  Access Token Secret
});

Twitter.post('statuses/update', { status: "New tweet from my node app tweetBot" }, function(error, data, response) {
  if(error) {
    console.log("There was a problem tweeting the message.", error);
  }
  else{
  	console.log("Status Updated Successfully!");
  }
});