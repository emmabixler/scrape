var express = require("express");
var mongojs = require("mongojs");
var cheerio = require("cheerio");
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
  res.send("Hello world 123");
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
  res.send(response.data);
});
//route 2- your choice of server

app.get("/scrape", function(req, res) {
  axios.get("https://www.nytimes.com/").then(function(response) {
    var $ = cheerio.load(response.data);
    res.send(response.data);
    $(".title").each(function(i, element) {
      var title = $(this)
        .childern("a")
        .text();
      var link = $(this)
        .childern("a")
        .attr("href");
      if (title && link) {
        db.scrapedData.save({
          title: title,
          link: link
        }),
          function(error, saved) {
            if (error) {
              console.log(error);
            } else {
              console.log(saved);
            }
          };
      }
    });
  });
});
// var PORT = process.env.PORT || 3000;

// var MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.listen(3005, function() {
  console.log("App running on port 3000!");
});
