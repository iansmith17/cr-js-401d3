'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const mongoConnect = require('./util/mongoose-connect');
const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/401d3-people';

  mongoConnect(MONGODB_URI)
    .then(() => {
      server.start(3000);
    })
    .catch(console.error);

