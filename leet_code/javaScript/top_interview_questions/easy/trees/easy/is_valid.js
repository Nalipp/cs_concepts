function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

n1 = new TreeNode(1);
n1.left = new TreeNode(1);
// n1.right.right = new TreeNode(8);
// n1.right.left = new TreeNode(4);
// n1.left = new TreeNode(1);
// n1.left.right = new TreeNode(2);
// n1.left.left = new TreeNode(0);

var isValidBST = function(root, min, max) {
  if(max !== null && root.val >= max) return false;
  if(min !== null && root.val <= min) return false;

  if(root.left && !isValidBST(root.left, min, root.val)) {
    return false;
  }

  if(root.right && !isValidBST(root.right, root.val, max)) {
    return false;
  }

  return true;
}

console.log(isValidBST(n1));
