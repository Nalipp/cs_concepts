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
  if (!this.head) return null;

  function inner(current) {
    fn(current) 
    if (current.left) inner(current.left);
    if (current.right) inner(current.right);
  }
  inner(this.head);
}

BST.prototype.delete = function(val) {
  
  this.iterate(node => {
    if (node.val === val) {
      if (node.right) {
        node.val = this.removeSmallestNode(node.right);
      }
    }
  });
}

BST.prototype.removeSmallestNode = function(node) {
  if (!node) return null;
  let removedVal;

  function inner(current) {
    if (current.left && current.left.left) current = inner(current.left);
    else {
      removedVal = current.left.val;
      current.left = null;
    }
  }

  inner(node)
  return removedVal;
}

let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(20);
tree.insert(2);
tree.insert(19);
tree.insert(22);
tree.insert(4);

tree.delete(10);

console.log(tree);
