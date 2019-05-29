'use strict';

// const express = require('express');
// const Router = express.Router;

const { Router, json } = require('express');

const router = module.exports = new Router();

router.use(json());

let db = [];
let nextId = 1;

router.get('/posts', (req, res) => {
  res.send(db);
});

router.post('/posts', (req, res) => {
  let newPost = {
    ...req.body,
    id: nextId++ // db.length + 1
  };
  db.push(newPost);
  res.send(newPost);
});

router.get('/posts/:id', (req, res) => {
  var post = db.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404);
  }

  res.send(post);
});

// TODO: write test for this!
router.use((err, req, res, next) => {
  res.status(500);
  res.json({
    error: err
  });
});
