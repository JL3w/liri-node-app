require("dotenv").config();
var fs = require("fs");
var Spotify = require("./spot");
var spot = new Spotify();
var Band = require("./bit");
var band = new Band();
var Movie = require("./omdb");
var movie = new Movie();
var cmdInput = (process.argv[2]);
var term = (process.argv.slice(3).join(""));
var dashterm = (process.argv.slice(3).join("-"));
var fileName = "./random.txt"
var docmd = "";
var domedia = "";
function doWhat(filename) {
    fs.readFile(filename, "utf8", (error, data) => {
    if (error) {
        return console.log(error);
    }
    var dataArr = data.split(",");
    cmd = dataArr[0];
    dashterm = dataArr[1]; 
    logic(cmd, dashterm);
    }
    )
}

function logic(cmd, term) {
    switch(cmd) {
        case "concert-this":
            return band.Get(term);
        case "spotify-this-song":
            return spot.Get(dashterm);
        case "movie-this":
            return movie.Get(dashterm);
        case "do-what-it-says":
            return doWhat(fileName);
    };
};
logic(cmdInput, term);


