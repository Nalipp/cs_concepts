// Problem 1
// manually link the following nodes into a binary search tree

function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var n1 = new node(15);
var n2 = new node(8);
var n3 = new node(22);
var n4 = new node(5);
var n5 = new node(12);
var n6 = new node(16);



// Problem 2
// create a function that accepts the head of a tree and a value as arguments
// the function should add insert a new node into the tree for the value and return the updated tree


var n1 = new node(15);

function insert(head, val) {
  // code goes here
}

insert(n1, 8);
insert(n1, 22);
insert(n1, 5);
insert(n1, 12);
insert(n1, 16);


// Problem 3
// print the value of every node
// try to solve both with iteration and recursion?

function print(head) {
  // code goes here
}

print(n1);


// Problem 4
// Invert a binary search tree

function invertBinaryTree(head) {
  // code goes here
}

console.log(invertBinaryTree(n1));

//       4
//     /   \
//    2     7
//   / \   / \
//  1   n n   9

//to

//       4
//     /   \
//    7     2
//   / \   / \
//  9   n n   1
