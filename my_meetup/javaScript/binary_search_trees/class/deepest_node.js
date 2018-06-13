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
n1.right.left.right = new node(18);

function findMaxDepth(root) {
  if (!root) return 0;
  let leftTotal = findMaxDepth(root.left) + 1; 
  let rightTotal = findMaxDepth(root.right) + 1;
  return Math.max(leftTotal, rightTotal);
}

console.log(findMaxDepth(n1));

