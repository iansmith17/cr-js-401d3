'use strict';

const express = require('express');

const app = express();

app.use(express.json());

const peopleRoutes = require('../routes/people');
app.use(peopleRoutes);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

