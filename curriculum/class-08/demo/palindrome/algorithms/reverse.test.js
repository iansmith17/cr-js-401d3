'use strict';

const LinkedList = require('../lib/linked-list');

function reverse(list) {
  let current = list.head;
  let newHead = null;

  while (current) {
    // Capture what's left to reverse
    list.head = current.next;

    // Attach previous new head as tail after current
    current.next = newHead;

    // Reset newHead to include current node plus previous newHead as tail
    newHead = current;

    // Continue with head of list
    current = list.head;
  }

  list.head = newHead;
}

describe('LinkedList Reverse', () => {
  it.each([
    [[], []],
    [[1], [1]],
    [[1,2], [2,1]],
    [[1,2,3,4,5,6], [6,5,4,3,2,1]],
    [[1,2,,4,5,6], [6,5,4,,2,1]],
  ])(
    'reverse([%s]) is [%s]',
    (values, expected) => {
      // Arrange
      var ll = new LinkedList(...values);

      // Act
      reverse(ll);

      // Assert
      expect(ll.toArray()).toEqual(expected);
    }
  );
});
