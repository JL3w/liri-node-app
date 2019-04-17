require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

class Spot {
    Get(term) {
        var spotify = new Spotify(keys.spotify);
        spotify.search({ type: 'track', query: term }, function (err, data) {
            var data = data.tracks.items[0];
            var songData = [
                "Artists: " + data.artists[0].name,
                "Song Name: " + data.name,
                "Preview Link: " + data.preview_url,
                "Album Name: " + data.album.name
            ].join("\n\n");
            console.log(songData);
            fs.appendFile("log.txt", "\n" + songData, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        })

    }
}
module.exports = Spot;