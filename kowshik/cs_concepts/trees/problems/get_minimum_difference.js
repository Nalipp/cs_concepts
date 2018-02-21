function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var getMinimumDifference = function(root) {
  if (!root.left && !root.right) return 0;
  let min = Infinity;

  let helper = function(node, rootVal) {
    if (!node) return;
    if(node.left) {
      min = Math.min(min, node.val - node.left.val);
      console.log(min);
      helper(node.left, rootVal)
    }
    if(node.right) {
      min = Math.min(min, node.right.val - node.val, node.right.val - rootVal);
      console.log(min);
      helper(node.right, rootVal)
    }
  }

  helper(root, root.val);
  return min
};

// [1,null,3,2]
// [543,384,652,null,445,null,699]
// [236,104,701,null,227,null,911]
//
n1 = new TreeNode(236);
n1.left = new TreeNode(104);
n1.right = new TreeNode(701);
n1.left.right = new TreeNode(227);
n1.right.right = new TreeNode(911);

// n1 = new TreeNode(1);
// n1.right = new TreeNode(3);
// n1.right.left = new TreeNode(2);

// n1 = new TreeNode(543);
// n1.left = new TreeNode(384);
// n1.left.right = new TreeNode(445);
// n1.right = new TreeNode(652);
// n1.right.right = new TreeNode(699);

console.log(getMinimumDifference(n1)); 
