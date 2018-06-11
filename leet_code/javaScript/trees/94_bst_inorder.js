// Given a binary tree, return the inorder traversal of its nodes' values.

// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,3,2].

function node(val) {
  this.val = val;
  this.left = this.right = null;
}

let n1 = new node(15);
n1.left = new node(8);
n1.right = new node(22);
n1.left.left = new node(5);
n1.left.right = new node(2);
n1.right.left = new node(16);

var inorderTraversal = function(root) {
  let results = [];
  function inner(root) {
    if (!root) return results
    inner(root.left);
    results.push(root.val);
    inner(root.right);
  }
  inner(root);
  return results;
};

console.log(inorderTraversal(n1));


