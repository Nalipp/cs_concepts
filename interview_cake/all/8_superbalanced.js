function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

let root = new BinaryTreeNode(15);
root.insertLeft(8);
root.insertRight(20);

root.left.insertLeft(5);
root.left.insertRight(12);
root.left.right.insertLeft(10);

BinaryTreeNode.prototype.print = function() {
}

console.log(root.print());
