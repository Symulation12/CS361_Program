const express = require('express');
const Parser = require('rss-parser');
const router = express.Router();
const parser = require('rss-parser');


let dummySources = []
for( let i = 1; i < 20; i++)
{
  dummySources.push("Source-"+i);
}
/* GET home page. */
router.get('/article', function(req, res, next) {
  const parser = new Parser();
  
  const countMax = 10;
  let articles = []
  parser.parseURL("https://majorspoilers.com/category/critical-hit/feed")
  .then(feed => {
    let count = 0
    feed.items.forEach(item => {
      if(count < countMax)
      {
        count++
        articles.push(item)
      }
    })
    res.render('index', { title: 'Main Page', sources: dummySources, 
    filter: req.query["filter"] ? req.query["filter"] : "", 
    articles: articles, 
    id: req.query["id"] ? req.query["id"] : -1 });
  })
  .catch(e => {
    console.log(e)
    res.render(e)
  })
});

router.get('/settings', function(req, res, next) {

  res.render('settings');

})

module.exports = router;
