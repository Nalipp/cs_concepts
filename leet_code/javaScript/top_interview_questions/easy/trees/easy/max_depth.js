function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

n1 = new TreeNode(3);
n1.right = new TreeNode(20);
n1.left = new TreeNode(9);
n1.right.right = new TreeNode(7);
n1.right.left = new TreeNode(15);

let maxDepth = function(root, n = 0) {
  if (!root) return n;
  return Math.max(maxDepth(root.left, n++), maxDepth(root.right, n++));
}

console.log(maxDepth(n1));

// iteration
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// n1 = new TreeNode(3);
// n1.right = new TreeNode(20);
// n1.left = new TreeNode(9);
// n1.right.right = new TreeNode(7);
// n1.right.left = new TreeNode(15);
