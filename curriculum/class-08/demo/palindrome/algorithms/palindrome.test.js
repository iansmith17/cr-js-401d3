'use strict';

const LinkedList = require('../lib/linked-listt');

describe("Palindrome", () => {
  it.each([
    // [values, expected],
    [[], true],
    [[1], true],
    [[1,1], true],
    [[1,2], false],
    [[1,2,1], true],
    [[1,2,2], false],
    [[1,2,2,1], true],
    [[1,2,2,2], false],
    [[1,2,3,4,2,1], false],
    [[1,2,3,4,3,2], false],
    [[1,2,3,4,3,2,0], false],
    [[1,2,3,4,3,2,1], true],
    [[1,2,3,4,3,2,1,0], false],
  ])(
    'isPalindrome([%s]) is %o',
    (values, expected) => {
      var ll = new LinkedList(...values);
      expect(isPalindrome(ll)).toBe(expected);
    }
  );
});

function isPalindrome(list) {
  var left = list.head, length;
  return compareToEnd(0, left);

  function compareToEnd(i, right){
    if (right === null){
      length = i;
      console.log(`Reached end of ${list}`)
      console.log(list);
      console.trace();
      return true;
    }

    if (!compareToEnd(i + 1, right.next)) {
      return false;
    }

    // Reached midpoint without non-match
    if (i < length / 2)
      return true;

    console.log(`${i}: Comparing ${left.value} and ${right.value}`);
    return !!(left.value === right.value && (left = left.next));
  }
}
