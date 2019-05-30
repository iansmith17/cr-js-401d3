'use strict';

const express = require('express');
const router = express.Router();

const PeopleRepository = require('../models/people-model');
const peopleRepository = new PeopleRepository();

router.get('/people', (req, res, next) => {
  peopleRepository.getAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
    //.catch(err => next(err));
});

module.exports = router;
