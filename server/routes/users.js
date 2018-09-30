var express = require('express');
var router = express.Router();
var Book = require('../models/books');
var cuid = require('cuid');

router.get('/', function(req, res, next) {
  let book = new Book ({ author: "fulano", title: "whatever", description: "star wars", cuid: cuid()});
  let book2 = new Book ({ author: "fulano2", title: "whatever2", description: "star wars2", cuid: cuid()});
  res.json([book, book2]);
});

router.post('/', function(req, res, next) {
  Book.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var article = new Article(req.body.article);

    article.author = user;

    return article.save().then(function(){
      console.log(article.author);
      return res.json({article: article.toJSONFor(user)});
    });
  }).catch(next);
});

module.exports = router;
