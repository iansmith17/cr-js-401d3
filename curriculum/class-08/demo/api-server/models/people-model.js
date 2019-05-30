'use strict';

const uuid = require('uuid');

const db = [];

class People {
  getAll() {
    return Promise.resolve(db);
  }

  get(id) {
    return Promise.resolve(db.find(p => p._id === id) || null);
  }

  create(person) {
    person._id = uuid();
    db.push(person);
    return Promise.resolve(person);
  }

  update(person) {

  }

  delete(id) {

  }
}

module.exports = People;
