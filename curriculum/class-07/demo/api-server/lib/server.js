'use strict';

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   // Keep going
//   next();
// });
const logger = require('./middleware/logger');
app.use(logger);

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/test/error', () => {
  throw 'Test Error!';
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
