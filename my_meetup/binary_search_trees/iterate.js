class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(val) {
    this.head = null;
  }
}

BST.prototype.insert = function(val) {
  let newNode = new Node(val);
  if (!this.head) return this.head = newNode;

  function inner(current) {
    if (val <= current.val) {
      if (!current.left) return current.left = newNode;
      current = inner(current.left);
    } else {
      if (!current.right) return current.right = newNode;
      current = inner(current.right);
    }
  }
  inner(this.head);
  return this.head;
}

BST.prototype.iterate = function(fn) {
  this.iteratePreOrder(fn);
}

BST.prototype.iterateInOrder = function(fn) {
  if (!this.head) return null;

  function inner(current) {
    if (current.left) inner(current.left);
    fn(current.val) 
    if (current.right) inner(current.right);
  }
  
  inner(this.head);
}

BST.prototype.iteratePreOrder = function(fn) {
  if (!this.head) return null;

  function inner(current) {
    fn(current.val) 
    if (current.left) inner(current.left);
    if (current.right) inner(current.right);
  }
  inner(this.head);
}

BST.prototype.iteratePostOrder = function(fn) {
  if (!this.head) return null;

  function inner(current) {
    if (current.left) inner(current.left);
    if (current.right) inner(current.right);
    fn(current.val) 
  }
  
  inner(this.head);
}

BST.prototype.collect = function(type = 'preOrder') {
  let results = [];

  if (type === 'preOrder') {
    this.iteratePreOrder((val) => results.push(val));
  }

  if (type === 'inOrder') {
    this.iterateInOrder((val) => results.push(val));
  }

  if (type === 'postOrder') {
    this.iteratePostOrder((val) => results.push(val));
  }

  return results;
}

let tree = new BST();

tree.insert(10);
tree.insert(19);
tree.insert(6);
tree.insert(2);
tree.insert(4);
tree.insert(22);
tree.insert(20);
tree.insert(1);

let preOrder = tree.collect('preOrder');
let inOrder = tree.collect('inOrder');
let postOrder = tree.collect('postOrder');

console.log(preOrder); 
console.log(inOrder); 
console.log(postOrder); 

