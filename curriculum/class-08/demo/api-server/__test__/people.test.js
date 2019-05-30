'use strict';

const People = require('../models/people-model');
const repository = new People();

describe('People Repository', () => {
  it('should start empty', () => {
    var result = repository.getAll();

    expect(result).toEqual([]);
  });

  it('can create person and then get it', () => {
    var result = repository.create({
      name: 'Keith'
    });

    expect(result).toBeDefined();
    expect(result.name).toBe('Keith');
    expect(result._id).toBeDefined();

    var fromDb = repository.get(result._id);
    expect(fromDb).toBeDefined();
    expect(fromDb).toEqual(result);

    var all = repository.getAll();
    expect(all).toEqual([ fromDb ]);
  });

  it('get returns null for missing id', () => {
    var result = repository.get('poop');

    expect(result).toBeNull();
  });
});
