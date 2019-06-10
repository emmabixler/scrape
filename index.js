var axios = require("axios");
var cherrio = require("cherrio");

console.log("test");

axios.get("https://www.nydailynews.com/ ").then(function(response) {
  var $ = cherrio.load(response.data);
});

//empty array for to sava what we collected
var results = [];
$("p.title").each(function(i, element) {
  var title = $(element).text();
  var link = $(eleement)
    .childern()
    .attr("href");
  results.push({
    title: title,
    link: link
  });
});
console.log(results);
