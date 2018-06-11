function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype.insert = function(val) {
  let newNode = new TreeNode(val);
  current = this;
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
}

var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  let mid = Math.floor(nums.length / 2);       // 2

  function inner(nums, root) {
    if (!nums.length) return;
    let mid = Math.floor(nums.length / 2);
    root.insert(nums[mid])
    inner(nums.slice(0, mid), root);
    inner(nums.slice(mid + 1), root);
  }

  let newNode = new TreeNode(nums[mid]);       // 0
  let root = newNode;
  inner(nums.slice(0, mid), root);
  inner(nums.slice(mid + 1), root);

  return root;
};

let nums = [-10, -3, 0, 9, 5];

// let n1 = new TreeNode(0);
// n1.insert(-3);
// n1.insert(9);
// n1.insert(-10);
// n1.insert(5);

console.log(sortedArrayToBST(nums));


// let root = new TreeNode(0)
// insert(root, -3);
// insert(root, -10);
// insert(root, 9);
// insert(root, 5);

// console.log(root);


