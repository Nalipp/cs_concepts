// ****************************************************************************************************
//   sum the tree values

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function Tree() {
  this.root = null;
  this.size = 0;
}

Tree.prototype.size = function() {
  return this.size;
}

Tree.prototype.add = function(val) {
  let newNode = new Node(val);
  let current = this.root;

  while(current) {
    if (val < current.val) {
      if (!current.left) {
        current.left = newNode;
        break;
      } else current = current.left;
    }
    if (val > current.val) {
      if (!current.right) {
        current.right = newNode;
        break;
      } 
      else current = current.right;
    }
  }
  if (!this.root) this.root = newNode;
  this.size += 1;
  return this;
}

let tree = new Tree();
tree.add(22);
tree.add(14);
tree.add(34);
tree.add(10);
tree.add(17);
tree.add(25);
tree.add(5);
tree.add(12);
tree.add(11);

console.log(tree);
