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

// Below logger but above blueLogger means log static only once!
app.use(express.static('./public'));

const coloredLogger = require('./middleware/coloredLogger');
const blueLogger = coloredLogger('blue');
app.use(blueLogger);

const yellowHomeLogger = coloredLogger('yellow');
app.get('/', yellowHomeLogger, (req, res) => {
  res.send('OK');
});

app.get('/test/error', () => {
  throw 'Test Error!';
});

// If you wanted to redirect 404s
// app.get('*', yellowHomeLogger, (req, res) => {
//   res.redirect("/");
// });

const notFound = require('./middleware/notFound');
app.use(notFound);

const errorLogger = require('./middleware/error-logger');
app.use(errorLogger);
// app.use(errorLogger);
// app.use(errorLogger);
// app.use(errorLogger);

module.exports = {
  server: app,
  start: port => {
    let PORT = process.env.PORT || port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}...`);
    });
  }
};
