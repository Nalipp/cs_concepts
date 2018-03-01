function Node(val) {
  this.val = val;
  this.left = null; 
  this.right = null;
}

let n1 = new Node(8);
n1.left = new Node(6);
n1.left.left = new Node(4);
n1.left.left.right = new Node(5);
n1.left.right = new Node(7);
n1.right = new Node(12);
n1.right.left = new Node(11);

function BSTToArr(tree, result=[]) {
  if (!tree) return;
  if (tree.left) BSTToArr(tree.left, result);
  result.push(tree.val)
  if (tree.right) BSTToArr(tree.right, result);
  return result;
}

console.log(BSTToArr(n1));
