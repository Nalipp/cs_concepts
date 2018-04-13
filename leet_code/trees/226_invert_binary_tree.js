class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let n1 = new Node(4);
n1.left = new Node(2);
n1.left.left = new Node(1);
n1.left.right = new Node(3);
n1.right = new Node(7);
n1.right.right = new Node(9);
n1.right.left = new Node(6);

function invertTree(node) {
  if (!node) return null;
  let temp = node.right;
  node.right = invertTree(node.left);
  node.left = invertTree(temp)
  return node;
}

console.log(invertTree(n1)); 

