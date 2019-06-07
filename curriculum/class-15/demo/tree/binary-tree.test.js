'use strict';

const BinaryTree = require('./binary-tree');

describe('binary tree', () => {
  it('can traverse preorder', () => {
    var tree = new BinaryTree();

    tree.root = new BinaryTree.Node('A');
    tree.root.left = new BinaryTree.Node('B');
    tree.root.right = new BinaryTree.Node('C');
    tree.root.left.left = new BinaryTree.Node('D');
    tree.root.left.right = new BinaryTree.Node('E');
    tree.root.right.left = new BinaryTree.Node('F');

    expect(tree.preOrder()).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  })
})
