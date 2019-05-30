'use strict';

const uuid = require('uuid');

const db = [];

class People {
  getAll() {
    return db;
  }

  get(id) {
    return db.find(p => p._id === id) || null;
  }

  create(person) {
    person._id = uuid();
    db.push(person);
    return person;
  }

  update(person) {

  }

  delete(id) {

  }
}

module.exports = People;
