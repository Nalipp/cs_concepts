function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var insert = function(root, val) {
  let newNode = new TreeNode(val);
  if(!root) return root = newNode;
  let current = root;
  while (current) {
    if (val <= current.val) {
      if (!current.left) return current.left = newNode;
      else current = current.left;
    }
    else {
      if(!current.right) return current.right = newNode;
      else current = current.right;
    }
  }
  return root;
}

var sortedArrayToBST = function(nums) {
  if (!nums) return [];
  let midI = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[midI]);
  let leftI = rightI = midI;
  while (leftI--) insert(root, nums[leftI]);
  while (rightI++ < nums.length - 1) insert(root, nums[rightI]);
  return root;
};

// let nums = [-10, -3, 0, 9, 5];
let nums = [0,1,2,3,4,5];

console.log(JSON.stringify(sortedArrayToBST(nums)));

// let root = new TreeNode(0)
// insert(root, -3);
// insert(root, -10);
// insert(root, 9);
// insert(root, 5);

// console.log(root);
