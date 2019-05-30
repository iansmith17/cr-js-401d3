'use strict';

const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
  name: { type: String, required: true },
});

// If Mongoose already has a people, don't register a new one
const People = mongoose.models.people ||
  // Otherwise create people model from schema
  mongoose.model('people', peopleSchema);

module.exports = People;
