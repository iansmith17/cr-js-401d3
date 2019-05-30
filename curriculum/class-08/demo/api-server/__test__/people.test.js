'use strict';

const mongoConnect = require('../util/mongoose-connect');
const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/401d3-people';

// Doesn't work because we aren't waiting for the promise to resolve
// mongoConnect(MONGODB_URI);

const People = require('../models/people-model');
const repository = new People();

describe('People Repository', () => {
  beforeAll(() => {
    return mongoConnect(MONGODB_URI);
  });

  // TODO: purge collection before tests
  it.skip('should start empty', async () => {
    var result = await repository.getAll();

    expect(result).toEqual([]);
  });


  it('can create person and then get it', async () => {
    var result = await repository.create({
      name: 'Keith'
    });

    expect(result).toBeDefined();
    expect(result.name).toBe('Keith');
    expect(result._id).toBeDefined();

    var fromDb = await repository.get(result._id);
    expect(fromDb).toBeDefined();
    // This fails because ObjectIds don't equal each other
    // expect(fromDb).toEqual(result);
    console.log(fromDb);
    expect(fromDb._id).toBeDefined();
    expect(fromDb._id.toString()).toBe(result._id.toString());
    expect(fromDb.name).toBe(result.name);

    var all = await repository.getAll();
    expect(all.length).toBeGreaterThan(0);
    expect(all.find(p => p._id.toString() === fromDb._id.toString())).toBeDefined();
  });

  it('get returns null for invalid id', async () => {
    var result = await repository.get('poop');

    expect(result).toBeNull();
  });

  it('get returns null for missing id', async () => {
    var result = await repository.get('deadbeefdeadbeefdeadbeef');

    expect(result).toBeNull();
  });

  it('throws ValidationError for person without name', () => {
    return expect(repository.create({ Name: 'Keith' }))
      .rejects.toThrowError();
  });
});
