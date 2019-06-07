'use strict';

const supergoose = require('../../supergoose');

const User = require('../../../src/auth/users-model');
const Role = require('../../../src/auth/role-model');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('User Model', () => {
  describe('findOne', () => {
    it('populates acl', async () => {
      // Arrange
      await new User({
        username: 'k', password: 'd', role: 'editor' }).save();
      await new Role({ role: 'editor', capabilities: ['c', 'r', 'u'] }).save();

      // Act
      let user = await User.findOne({ username: 'k' });

      // Assert
      expect(user).toBeDefined();
      expect(user.acl).toBeDefined();
      expect(user.acl.capabilities.toObject()).toEqual(['c', 'r', 'u']);

      expect(user.can('c')).toBe(true);
      expect(user.can('r')).toBe(true);
      expect(user.can('u')).toBe(true);

      expect(user.can('d')).toBe(false);
    });
  });
});
