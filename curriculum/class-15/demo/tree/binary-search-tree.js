'use strict';

const BinaryTree = require('./binary-tree');

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (this.root === null) {
      this.root = new BinaryTree.Node(value);
      return;
    }

    function addNode(node, value) {
      // Assume node is not null
      if (value < node.value) {
        if (node.left === null) {
          node.left = new BinaryTree.Node(value);
        } else {
          addNode(node.left, value);
        }
      }
    }
  }
}

module.exports = BinarySearchTree;
