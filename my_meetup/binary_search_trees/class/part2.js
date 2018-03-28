// Problem 1 link nodes
// Problem 2 insert a node
// Problem 3 print nodes
// Problem 4 invert a tree
// Problem 5 find second largest value
// Problem 6 is valid


var t1 = require('./tree');

// **************************************************
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


// **************************************************
// Problem 2
// create a function that accepts the head of a tree and a value as arguments
// the function should add insert a new node into the tree for the value and return the updated tree


var n1 = new node(15);

function insert(head, val) {
  // code goes here
}

// insert(n1, 8);
// insert(n1, 22);
// insert(n1, 5);
// insert(n1, 12);
// insert(n1, 16);


// **************************************************
// Problem 3 
// print the value of every node
// with BFS
// with DFS
//   -> preOrder
//   -> inOrder
//   -> postOrder

function print(head) {
  // code goes here
}

print(n1);


// **************************************************
// Problem 4
// Invert a binary search tree and return the reversed tree
//
function invertBinaryTree(head) {
  // code goes here
}

invertBinaryTree(n1);

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


// **************************************************
// Problem 5
// Write a function that returns the second largest number of a bst
// Solve with DFS and BFS

//       15
//     /    \
//    8     22
//   / \    / \
//  5   12 16  n
//
//  => 16

function secondLargestNode(head) {
  // code goes here
}

secondLargestNode(t1);


// **************************************************
// Problem 6
// Write a function that determines if a bst is valid and returns a boolean value

//       15
//     /    \
//    8     22
//   / \    / \
//  5   12 16  n 
//  => true

//    15
//  /    \
// 22     8
//  => false

function isValid(head) {
}

console.log(isValid(t1));


// ****************************************************************************************************
// SOLUTIONS
// ****************************************************************************************************


// Problem 1
// link together nodes
//
// let n1 = new node(15);
// n1.left = new node(8);
// n1.right = new node(22);
// n1.left.left = new node(5);
// n1.left.right = new node(12);
// n1.right.left = new node(16);


// Problem 2
// insert a node into a bst

  // let newNode = new node(val);
  // if (!head) return head = newNode;

  // let current = head;

  // while (current) {
  //   if (val <= current.val) {
  //     if (!current.left) {
  //       current.left = newNode;
  //       return head;
  //     } else {
  //       current = current.left;
  //     }
  //   } else {
  //     if (!current.right) {
  //       current.right = newNode;
  //       return head;
  //     } else {
  //       current = current.right;
  //     }
  //   }
  // }


// Problem 3
// print the values of a bst

  // recursive
  // if (!head) return null;
  // print(head.left);
  // print(head.right);
  // console.log(head.val); 

  // iteration
  // if (!head) return null;
  // let stack = [head];

  // while (stack.length) {
  //   let current = stack.pop(); 
  //   console.log(current.val);
  //   if (current.right) stack.push(current.right);
  //   if (current.left) stack.push(current.left);
  // }


// Solution Problem 4 
// invert a tree

  // if (!head) return head;
  // let temp = head.left;
  // head.left = invertBinaryTree(head.right);
  // head.right = invertBinaryTree(temp);
  // return head;


// Solution Problem 5
// find second largest value

// DFS solution

  // let f1 = -Infinity;
  // let f2 = -Infinity;
  
  // function iterate(head) {
  //   if (!head) return;
  //   head.left = iterate(head.left);
  //   let temp = f1;
  //   f1 = head.val;
  //   f2 = temp;
  //   head.right = iterate(head.right);
  // }
  // iterate(head);
  // return f2;

// BFS solution

  // let f1 = -Infinity;
  // let f2 = -Infinity;
  // let stack = [head];

  // while (stack.length) {
  //   let current = stack.pop();

  //   if (current.val > f1) {
  //     [f1, f2] = [current.val, f1];
  //   } else if (current.val > f2) {
  //     f2 = current.val
  //   }

  //   if (current.left) stack.push(current.left);
  //   if (current.right) stack.push(current.right);
  // }
  // return f2;


// Solution Problem 6 
// is valid
//
  // if (!head) return true;
  // if (head.left && head.left.val > head.val) return false;
  // if (head.right && head.right.val < head.val) return false;
  // return isValid(head.left) && isValid(head.right);
