// **************************************************
// Setup
// **************************************************

function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let n1 = new node(15);
n1.left = new node(8);
n1.right = new node(22);
n1.left.left = new node(5);
n1.left.right = new node(12);
n1.right.left = new node(16);
n1.right.left.left = new node(6);
n1.right.left.right = new node(18);


// **************************************************
// Your Code
// **************************************************

var sumOfLeftLeaves = function(root) {
// code here
};

console.log(sumOfLeftLeaves(n1)); // => 11


// **************************************************
// Solution
// **************************************************

  // let total = 0;
  // var inner = function(root) {
  //   if (!root) return;
  //   if (root.left) {
  //     if (!root.left.left && !root.left.right) {
  //       total += root.left.val;
  //     }
  //     inner(root.left);
  //   }
  //   inner(root.right);
  // }
  // inner(root);
  // return total;
