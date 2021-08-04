var express = require('express');
var router = express.Router();

let dummySources = []
for( let i = 1; i < 20; i++)
{
  dummySources.push("Source-"+i);
}
const articles = 
[{title: "This is a TEST ARTICLE", contents: "This is the content of said article"}, 
{title: "This is another test article", contents: "This article has even more content than the previous article"},
{title: "This is another test article", contents: "This article has even EVEN more content than the previous article"},
{title: "This is another test article", contents: "This article has even EVEN more EXTRA content than the previous article"},
{title: "Weather Report", contents: "Today the weather is?"},
{title: "Pet dogs?", contents: "Do you have a pet DOG?"},
{title: "Moon weather", contents: "Today on the MOON"},
{title: "What does the fish say?", contents: "Blub blub"}]
/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Main Page', sources: dummySources, filter: req.originalUrl.slice(1), articles: articles });
});

module.exports = router;
