// ****************************************************************************************************
// array to tree

function TreeNode(val) {
  this.val = val;
}

function Tree() {
  this.root = null;
}

Tree.prototype.add = function(val) {
  let newNode = new TreeNode(val);
  if (!this.root) return this.root = newNode;
  let current = this.root;
  while(true) {
    if (!current.left) {
      current.left = newNode;
      return this;
    }
    if (!current.right) {
      current.right = newNode;
      return this;
    }
    if (!current.left.left || !current.left.right) current = current.left;
    else if (!current.right.left || !current.right.right) current = current.right;
    else current = current.left;
  }
}

let arrayToTree = (arr) => {
  if (!arr.length) throw new Error('Array must contain an element'); 
  let tree = new Tree();
  for (let i = 0; i < arr.length; i++) {
    tree.add(arr[i]);
  }
  return tree;
}

arr = [17, 0, -4, 3, 15, 12, 4, 7];
console.log(arrayToTree(arr).root);

