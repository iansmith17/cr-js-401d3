'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    var result = [];
    preOrderVisit(this.root);
    return result;

    // Recursive helper!
    function preOrderVisit(node) {
      if (!node)
        return;

      result.push(node.value);

      preOrderVisit(node.left);
      preOrderVisit(node.right);
    }
  }

  inOrder() {

  }

  postOrder() {

  }
}

class Node {
  constructor(value){
    this.value = value;
    this.left = this.right = null;
  }
}

module.exports = BinaryTree;

// Export Node constructor as property of BinaryTree constructor
BinaryTree.Node = Node;
