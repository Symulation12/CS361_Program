var express = require('express');
var router = express.Router();

let dummySources = []
for( let i = 1; i < 20; i++)
{
  dummySources.push("Source-"+i);
}
const articles = 
[{title: "This is a TEST ARTICLE", contents: "This is the content of said article", source: "Source-1", id: 0}, 
{title: "This is another test article", contents: "This article has even more content than the previous article", source: "Source-2", id: 1},
{title: "This is another test article", contents: "This article has even EVEN more content than the previous article", source: "Source-2", id: 2},
{title: "This is another test article", contents: "This article has even EVEN more EXTRA content than the previous article", source: "Source-2", id: 3},
{title: "Weather Report", contents: "Today the weather is?", source: "Source-3", id: 4},
{title: "Pet dogs?", contents: "Do you have a pet DOG?", source: "Source-4", id: 5},
{title: "Moon weather", contents: "Today on the MOON", source: "Source-5", id: 6},
{title: "What does the fish say?", contents: "Blub blub", source: "Source-6", id: 7}]
/* GET home page. */
router.get('/article', function(req, res, next) {
  res.render('index', { title: 'Main Page', sources: dummySources, 
    filter: req.query["filter"] ? req.query["filter"] : "", 
    articles: articles, 
    id: req.query["id"] ? req.query["id"] : -1 });
});

router.get('/settings', function(req, res, next) {

  res.render('settings');

})

module.exports = router;
