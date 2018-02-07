// Requiring keys.js and each of the APIs (Twitter, Spotify, and OMDB are stored as variables)
require('dotenv').config();
require("./keys.js");
var request = require('request');
var twitter = require('twitter');
var spotify = require('node-spotify-api');

// "new Spotify" doesn't appear to work as a constructor- debug
// var spotify = new Spotify(keys.spotify);


// Variable for user entry slice(2).join(" ");
var entry1 = process.argv[2];
var entry2 = process.argv[3];

function showTwitter() {
    
    if(entry1 = "my-tweets") {
        // "new Twitter" doesn't appear to work as a constructor- debug
        var client = new Twitter({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });
        var myTweets = {
            screen_name:"EggMan2018"
        };

    client.get('statuses/user_timeline', myTweets, function(error, tweets, response) {
        if(error) throw error;
        console.log(tweets);  // The favorites. 
        console.log(response);  // Raw response object. 
        })
    } else {
        console.log("Something went wrong...")
    }
};

function showSpotify() {
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
};

function showOMDB() {
        if(entry1 = "movie-this")
    request("http://www.omdbapi.com/?t=" + entry2 + "=&plot=short&apikey=trilogy", function (error, response, body) {
    
        if (!error && response.statusCode === 200) {
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Released: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            }
    });
    
};

// Calling functions for each API
// showTwitter(); commented out due to constructor not working.
showOMDB();