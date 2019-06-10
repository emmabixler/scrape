var express = require("express");
var mongojs = require("mongojs");
var cherrio = require("cheerio");
var mongoose = require("mongoose");
var express = require("express-handlebars");
var axios = require("axios");
var app = require("express")();

var databaseURL = "scraper";
var collections = ["scrapedData"];

var db = mongojs(databaseURL, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

//next to put the server in a route function,empty brackets mean find anything and match scarped to id
app.get("/all,", function(req, res) {
  db.scrapedData.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});
//route 2- your choice of server

app.get("/scrape", function(req, res) {
  request("https://www.nytimes.com/", function(error, response, html) {
    var $ = cheerio.load(html);
    $(".title").each(function(i, element) {
      var title = $(this)
        .childern("a")
        .text();
    });
  });
});
// var PORT = process.env.PORT || 3000;

// var MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// axios.get("https://www.nytimes.com").then(function(response) {
//   var $ = cheerio.load(response.data);
//   var results = [];
//   $("article").each(function(i, element) {
//     var title = $(element)
//       .children()
//       .text();
//     var link = $(element)
//       .find("a")
//       .attr("href");
//     results.push({
//       title: title,
//       link: link
//     });
//   });

//   console.log(results);
// });
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
