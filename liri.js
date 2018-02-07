// Requiring each of the APIs (Twitter, Spotify, and OMDB are stored as variables)
require('dotenv').config();
var reqTwitter = require('twitter');
var reqSpotify = require('node-spotify-api');
var request = require('request');

// Requiring the keys.js file for access to the API keys
var keys = require("./keys.js");

 var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// Variable for user entry slice(2).join(" ");
var entry1 = process.argv[2];
var entry2 = process.argv[3];

var twitterEntry = function() {
    if(entry1 = "my-tweets") {

    client.get('statuses/user_timeline', function(error, tweets, response) {
        if(error) throw error;
        console.log(tweets);  // The favorites. 
        console.log(response);  // Raw response object. 
        })
    } else {
        console.log("Nothing to see here.")
    }
};

// var spotifyEntry = function () {
    if(entry1 = "spotify-this-song") {
        spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data); 
          });
    } else {
        console.log("Nope. Not working.")
    }
// };