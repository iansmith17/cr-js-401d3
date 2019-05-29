'use strict';

module.exports = function(req, res) {
  console.log('404!', `${req.path}`);
  res.status(404);

  // TODO: if Accept: application/json,
  // return JSON object { notFound: true }

  // TODO: use ejs to show 404 page
  res.send('THAT WAS NOT FOUND');
}
