
class List {
  constructor() {
    this.head = null;
  }

  add(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      // TODO: scan through the list until we find a node without next
    }
  }

  toString() {
    var result = '';
    var current = this.head;
    while(current !== null) {
      if (result === '') {
        result += current.value;
      }
      else {
        result += ',' + curent.value;
      }
    }
    return result;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;

/*
var myList = new List();
myList.head = new Node(4);
myList.head.next = new Node(8);
myList.head.next.next = new Node(15);
// ...
*/
