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
    // This feels weird...use async/await instead?
    try {
      this.validate(person);
    } catch (err) {
      return Promise.reject(err);
    }

    person._id = uuid();
    db.push(person);
    return Promise.resolve(person);
  }

  update(person) {

  }

  delete(id) {

  }

  validate(person) {
    if (!person.name)
      throw new ValidationError('name', person.name);

    // other properties here
  }
}

// TODO: put this in its own module
class ValidationError extends Error {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  toString() {
    return `Invalid value '${value}' for property ${name}`;
  }
}

module.exports = People;
