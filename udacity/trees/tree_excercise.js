var Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var BST = function() {
  this.root = null;
}

BST.prototype.insert = function(newVal) {
  let newNode = new Node(newVal);

  if (!this.root) return this.root = newNode;
  let current = this.root;

  while (true) {
    if (newVal < current.val) {
      if (!current.left) return current.left = newNode;
      current = current.left;
    }
    else {
      if (!current.right) return current.right = newNode;
      current = current.right;
    }
  }
}

// BST.prototype.search = function(searchVal, cur=this.root) {
//   if (!cur) return false
//   if (cur.val === searchVal) return true;

//   if (searchVal < cur.val) return this.search(searchVal, cur = cur.left);
//   if (searchVal > cur.val) return this.search(searchVal, cur = cur.right);
// }

BST.prototype.search = function(searchVal) {
  let cur = this.root;

  while (cur) {
    if (cur.val === searchVal) return true;
    if (searchVal < cur.val) cur = cur.left;
    else cur = cur.right;
  }
  return false;
};

BST.prototype.BFSPrint = function() {
  let queue = [this.root];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    console.log(currentNode.val);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
}

var tree = new BST(4)

// # Insert elements
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(5)

// console.log(tree);

// # Check search
console.log(tree.search(1));
// # Should be True
console.log(tree.search(4));
// # Should be False
// console.log(tree.BFSPrint());
