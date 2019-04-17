const axios = require("axios");
var fs = require("fs");
class Band {
Get(term) {
  var url = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp&date=upcoming";
  axios.get(url).then(function (response) {
    var data = response.data;
    if (data[0] == undefined) {
      console.log("Sorry, no upcoming shows listed for " + term )
    }
    else {
      for (var i = 0; i < 5; i++) {
        var showdata = [
          "Name: " + data[i].venue.name,
          "Location: " + data[i].venue.city + " " + data[i].venue.region,
          "date: " + data[i].datetime,
         ].join("\n\n");
        console.log(showdata);
        fs.appendFile("log.txt", "\n" + showdata, function (err) {
          if (err) {
            return console.log(err);
          }
        });
      };
    }
  })
}
}
module.exports = Band;