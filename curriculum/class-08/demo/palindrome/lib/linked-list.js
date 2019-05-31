'use strict';

const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  toArray() {
    if (!this.next)
      return [this.value];

    return [this.value, ...this.next.toArray()];
  }

  toString() {
    return `${this.toArray()}`;
  }

  [util.inspect.custom](depth, options) {
    return util.inspect(this.toArray(), { depth, ...options });
  }
}

class LinkedList {
  constructor(...values) {
    this.head = null;

    for(var i = values.length - 1; i >= 0; i--)
      this.insert(values[i]);
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  toArray() {
    return this.head ? this.head.toArray() : [];
  }

  toString() {
    return `LinkedList [${this.toArray()}]`;
  }

  [util.inspect.custom](depth, options) {
    return util.inspect(this.toArray(), { depth, ...options });
  }
}

module.exports = LinkedList;
