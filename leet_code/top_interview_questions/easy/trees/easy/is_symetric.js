function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


n1 = new TreeNode(1);
n1.right = new TreeNode(2);
n1.right.right = new TreeNode(3);
n1.right.left = new TreeNode(4);
n1.left = new TreeNode(2);
n1.left.right = new TreeNode(4);
n1.left.left = new TreeNode(3);

var isSymmetric = function(root) {
  if (!root) return true;
  return isEqual(root.left, reverse(root.right));
};

var reverse = function(node) {
  if (!node) return null;
  let temp = node.left;
  node.left = reverse(node.right);
  node.right = reverse(temp);
  return node;
}

var isEqual = function(ln, lr) {
  if (!ln && !lr) return true;
  if (!ln || !lr) return false;
  if (ln.val !== lr.val) return false;
  return isEqual(ln.left, lr.left) && isEqual(ln.right, lr.right);
}

console.log(isSymmetric(n1)); 
