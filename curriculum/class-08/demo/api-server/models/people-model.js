'use strict';

const People = require('./people-schema');

class PeopleRepository {
  getAll() {
    return People.find();
  }

  get(id) {
    return People.findOne({
      _id: id // Does this need to be a Mongo ObjectId?
    });
  }

  create(person) {
    var mongoPerson = new People(person);
    return mongoPerson.save(); // include validation
  }

  update(person) {

  }

  delete(id) {

  }
}

module.exports = PeopleRepository;
