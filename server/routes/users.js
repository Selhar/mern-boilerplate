var express = require('express');
var router = express.Router();
var Book = require('../models/books');
var cuid = require('cuid');
const categories = require('../constants/models');

router.get('/', function(req, res, next) {
  let book = new Book ({ author: "fulano", title: "whatever", description: "star wars", category: categories.interested, cuid: cuid()});
  let book2 = new Book ({ author: "fulano2", title: "whatever2", description: "star wars2", category: categories.interested, cuid: cuid()});
  res.json([book, book2]);
});

router.post('/', function(req, res, next) {
  let book = new Book({
    author:       req.body.author,
    title:        req.body.title,
    description:  req.body.description,
    category:     req.body.category,
    cuid:         cuid()
  });

  book.save( (err, data, next) => {
    if (err) res.send(err);
    res.end();
  })
});

module.exports = router;
