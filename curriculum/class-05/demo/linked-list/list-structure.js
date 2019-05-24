// Approximate LinkedLink structure
var myLinkedList = {
  head: {
    value: 4,
    next: {
      value: 8,
      next: {
        value: 15,
        next: {
          value: 16,
          next: {
            value: 23,
            next: {
              value: 42,
              next: null
            }
          }
        }
      }
    }
  }
};

// Any value of next is basically a list itself
var backHalf = {
  value: 16,
  next: {
    value: 23,
    next: {
      value: 42,
      next: null
    }
  }
};
*/