// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

Node.prototype.insert = function(data) {
  if (!this.data) {
    this.data = data;
    return this;
  }
  if (data < this.data) {
    if (this.left) this.left.insert(data);
    else {
      this.left = new Node(data);
      return this;
    }
  }
  else {
    if (this.right) this.right.insert(data);
    else {
      this.right = new Node(data);
      return this;
    }
  }
}

Node.prototype.contains = function(data) {
  if (!this.data) return null;
  if (this.data === data) return this;
  if (data < this.data && this.left) {
    this.left.contains(data);
  }
  else if (data > this.data && this.right) {
    this.right.contains(data);
  }
  return null;
}

let n1 = new Node();
n1.insert(9);
n1.insert(3);
n1.insert(4);
n1.insert(11);
n1.insert(5);

module.exports = Node;

// iterative insert
//   if (!this.data) {
//     this.data = data; 
//     return this;
//   }
//   let newNode = new Node(data);
//   let node = this;
//   while (node) {
//     if (data < node.data) {
//       if (!node.left) {
//         node.left = newNode;
//         return this;
//       }
//       else node = node.left;
//     }
//     else {
//       if (!node.right) {
//         node.right = newNode;
//         return this;
//       }
//       else node = node.right;
//     }
//   }

// iterative contains
//   if (!this.data) return null;
//   if (this.data === data) return this.data;
//   let node = this;
//   while(node) {
//     if (data < node.data) {
//       if (!node.left) return null;
//       if (node.left.data === data) return node.left;
//       node = node.left;
//     }
//     else {
//       if (!node.right) return null;
//       if (node.right.data === data) return node.right;
//       node = node.right;
//     }
//   }

