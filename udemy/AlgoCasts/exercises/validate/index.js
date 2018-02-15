// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const Node = require('./node');

function validate(node) {
  if (node.left) {
    if (node.left.data > node.data) return false;
    return validate(node.left);
  }
  if (node.right) {
    if (node.right.data < node.data) return false;
    return validate(node.right);
  }
  else return true;
}

const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
n.left.left.right = new Node(999);
console.log(n);

// console.log(validate(n)); 

module.exports = validate;
