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

let tree = new BST();

tree.insert(10);
tree.insert(19);
tree.insert(6);
tree.insert(2);
tree.insert(4);
tree.insert(22);
tree.insert(20);
tree.insert(1);

console.log(tree.head.left); 
// console.log(JSON.stringify(tree));
