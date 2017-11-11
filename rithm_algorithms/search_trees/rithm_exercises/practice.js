function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(newVal, cur=this.root) {
  let newNode = new Node(newVal);
  
  if (!cur) return this.root = newNode;
  
  if (newVal < cur.val) {
    if (!cur.left) cur.left = newNode;
    else return this.insert(newVal, cur = cur.left) 
  }
  if (newVal > cur.val) {
    if (!cur.right) cur.right = newNode;
    else return this.insert(newVal, cur = cur.right) 
  }
  return this;
}

BST.prototype.BFS = function(callback) {
  if (this.root) {
    let queque = [this.root];

    while (queque.length > 0) {
      let cur = queque.shift()
      callback(cur);
      if (cur.left) queque.push(cur.left);
      if (cur.right) queque.push(cur.right);
    }
  }
}

BST.prototype.DFSPreOrder = function(callback) {
  if (this.root) {
    let traverse = (cur) => {
      callback(cur);
      if (cur.left) traverse(cur.left);
      if (cur.right) traverse(cur.right);
    }
    traverse(this.root)
  }
}

BST.prototype.DFSInOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    console.log(node.val);
    if (node.left) traverse(node.left);
    data.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return data;
};

BST.prototype.DFSPostOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.val);
  }
  traverse(current);
  return data;
}

BST.prototype.__countChildren = function(node) {
  var count = 0;
  if (node.left !== null) count++;
  if (node.right !== null) count++;
  return count;
};

BST.prototype.remove = function(removeVal) {               // 9
  var that = this;

  var removeNode = function(node, removeVal) {
    if(!node) return null;

    if(removeVal === node.val) {                           // 9 === 9
      if(!node.left && !node.right) return null;
      if(!node.left) return node.right;
      if(!node.right) return node.left;
      // 2 children
      console.log('2 children');
      var temp = that.getMin(node.right);
      console.log('temp', temp);
      node.val = temp;
      node.right = removeNode(node.right, temp);
      return node;
    }

    if (removeVal < node.val) {                           // 9 < 15
      node.left = removeNode(node.left, removeVal);       // 9, 9
      return node;
    } else {
      node.right = removeNode(node.right, removeVal);
      return node;
    }
  };
  this.root = removeNode(this.root, removeVal);
};

BST.prototype.getMin = function(node) {
  console.log('getMin********************');
  if (!node) node = this.root;
  if (node.left) this.getMin(node.left);
  console.log(node.val);
  return node.val;
}

// BST.prototype.getMax = function(node) {
//   if (!node) node = this.root;
//   if (node.right) this.getMin(node.right);
//   return node.val;
// }


let tree = new BST();

tree.insert(15);
tree.insert(9);
tree.insert(22);
tree.insert(5);
tree.insert(13);
tree.insert(25);
tree.insert(11);
tree.insert(14);
tree.insert(10);
tree.insert(12);

tree.DFSPreOrder((n) => console.log(n.val));

console.log('----------remove----------') 
tree.remove(9);

// tree.DFSPreOrder((n) => console.log(n.val));
// // console.log('----------BFS----------') 
tree.BFS((n) => console.log(n.val));

// tree.DFSPreOrder(function(node) {
//   console.log(node.val);
// });

// console.log(tree.DFSPostOrder());
// tree.DFSInOrder(function(node) {
//   console.log(node.val);
// });

// console.log(tree);
