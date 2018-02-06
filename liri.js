// Requiring each of the APIs (Twitter, Spotify, and OMDB are stored as variables)
require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

// Requiring the keys.js file for access to the API keys
var keys = require("./keys.js");