var list = new DoublyLinkedList();

// Brute force initialize doubly-linked list
var node0 = new Node(4);
var node1 = new Node(8);
var node2 = new Node(15);

list.head = node0;
node0.next = node1;
node1.next = node2;
node2.next = null;

list.tail = node2;
node2.prev = node1;
node1.prev = node0;
node0.prev = null;
