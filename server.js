var express = require("express");
var mongojs = require("mongojs");
var cherrio = require("cheerio");
var mongoose = require("mongoose");
var express = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// port listening to
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
