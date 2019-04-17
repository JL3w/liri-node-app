const axios = require("axios");
var fs = require("fs");
class Movie {
  Get(term) {
  axios.get("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
      var data = response.data;
      var movData = [
        "Title: " + data.Title,
        "Year: " + data.Year,
        "IMDB Rating: " + data.Ratings[0].Value,
        "Rotten Tomatoes Rating: " + data.Ratings[1].Value,
        "Country: " + data.Country,
        "Language: " + data.Language,
        "Plot: " + data.Plot,
        "Actors: " + data.Actors
      ].join("\n\n");
      console.log(movData);
      fs.appendFile("log.txt", "\n" + movData, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    }
  )
  }
}
module.exports = Movie;