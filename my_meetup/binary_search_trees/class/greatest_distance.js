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

var maxDistanceBetweenTwoNodes = function(root) {
  if (!root) return 0;
  let queue = [root];
  let maxDiameter = 0;
  while (queue.length) {
    let current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    let left = findMaxDepth(current.left);
    let right = findMaxDepth(current.right);
    maxDiameter = Math.max(maxDiameter, left + right);
  }
  return maxDiameter + 1;
};

function findMaxDepth(root) {
  if (!root) return 0;
  let leftTotal = findMaxDepth(root.left) + 1; 
  let rightTotal = findMaxDepth(root.right) + 1;
  return Math.max(leftTotal, rightTotal);
}

console.log(maxDistanceBetweenTwoNodes(n1));

