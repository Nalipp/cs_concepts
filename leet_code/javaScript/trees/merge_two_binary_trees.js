function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(t1, t2) {
  if(!t1 && !t2) return null;
  if(!t1) return t2;
  if(!t2) return t1;

  let resultsArr = [];
  let que1 = [t1];
  let que2 = [t2];

  while (que1.length || que2.length) {
    let current1 = que1.shift();
    let current2 = que2.shift();
    if (current1) {
      que1.push(current1.left);
      que1.push(current1.right);
    }
    if (current2) {
      que2.push(current2.left);
      que2.push(current2.right);
    }
    if (!current1 && !current2) resultsArr.push(null);
    else {
      let c1 = current1 ? current1.val : 0;
      let c2 = current2 ? current2.val : 0;
      resultsArr.push(c1 + c2);
    }
  }
  return buildTree(resultsArr);
}

function buildTree(arr) {
  let root = new TreeNode(arr.shift());
  
  while (arr.length) {
    let newNode = new TreeNode(arr.shift())
    let current = root;

    while(current) {
      if(!current.left) {
        current.left = newNode;
        break;
      }
      if(!current.right) {
        current.right = newNode;
        break
      }
      if(!current.left.left || current.left.right) current = current.left;
      else current = current.right
    }
  }
  return root
}

let result = buildTree([ 3, 4, 5, 5, 4, null, 7, null, null, null, null ]);
console.log(result); 

// let t1 = new TreeNode(1);
// t1.left = new TreeNode(3);
// t1.left.left = new TreeNode(5);
// t1.right = new TreeNode(2);

// let t2 = new TreeNode(2);
// t2.left = new TreeNode(1);
// t2.left.right = new TreeNode(4);
// t2.right = new TreeNode(3);
// t2.right.right = new TreeNode(7);

// console.log(mergeTrees(t1, t2)) 
