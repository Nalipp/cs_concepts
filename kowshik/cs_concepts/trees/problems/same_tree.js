 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  let queQ = [q.left, q.right];
  let queP = [p.left, p.right];

  while (queQ.length || queP.length) {
    let currentQ = queQ.shift();
    let currentP = queP.shift();

    if (currentQ && currentP) {
      if (currentQ.val !== currentP.val) return false;

      queQ.push(currentQ.left);
      queQ.push(currentQ.right);
      queP.push(currentP.left);
      queP.push(currentP.right);
    } 

    if (!currentQ && currentP) return false
    if (currentQ && !currentP) return false
  }
  return true;
};

// [1,2]
// [1,null,2]
// => false

// [12,null,6]
// [12,null,6]
// => true

// [12,null,-60]
// [12,null,72]
// => false

let p = new TreeNode(1);
p.right = new TreeNode(6);

let q = new TreeNode(1);
q.right = new TreeNode(60);

console.log(isSameTree(p, q));

// recursive
  // if (!p && !q) return true;
  // if (!q || !p) return false;
  // if (q.val !== p.val) return false;
  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
