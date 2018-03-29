function node(val) {
  this.val = val;
  this.left = this.right = null;
}

let n1 = new node(15);
n1.left = new node(8);
n1.right = new node(22);
n1.left.left = new node(5);
n1.left.right = new node(12);
n1.right.left = new node(16);

var minDiffInBST = function(root) {
  if (!root) return null;
  let minDistance = Infinity; 

  function inner(root) {
    if (!root) return;
    if (root.left) {
      let currentDistance = Math.abs(root.val - root.left.val);
      minDistance = Math.min(minDistance, currentDistance);
    }
    if (root.right) {
      let currentDistance = Math.abs(root.val - root.right.val);
      minDistance = Math.min(minDistance, currentDistance);
    }
    inner(root.left);
    inner(root.right);
  }
  inner(root);

  return minDistance;
};

console.log(minDiffInBST(n1));
