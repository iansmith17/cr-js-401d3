'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('OK');
});

module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}...`);
    });
  }
};
