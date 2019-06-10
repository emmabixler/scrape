var express = require("express");
var mongojs = require("mongojs");
var cherrio = require("cheerio");
var mongoose = require("mongoose");
var express = require("express-handlebars");
var axios = require("axios");
var app = express();

var PORT = process.env.PORT || 3000;

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

axios.get("https://www.nytimes.com").then(function(response) {
  var $ = cheerio.load(response.data);
  var results = [];
  $("article").each(function(i, element) {
    var title = $(element)
      .children()
      .text();
    var link = $(element)
      .find("a")
      .attr("href");
    results.push({
      title: title,
      link: link
    });
  });

  console.log(results);
});

port listening to
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
