class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.head = null;
  }
}

BST.prototype.insert = function(val) {
  let newNode = new Node(val);
  if (!this.head) return this.head = newNode;

  let current = this.head;

  while (current) {
    if (val <= current.val) {
      if (!current.left) {
        current.left = newNode;
        return this.head;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        current.right = newNode;
        return this.head;
      } else {
        current = current.right;
      }
    }
  }
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

console.log(JSON.stringify(tree));
