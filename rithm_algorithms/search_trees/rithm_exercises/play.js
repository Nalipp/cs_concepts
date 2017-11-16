function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.root) {
    this.root = node;
  } else {
    var current = this.root;
    while(current) {
      if(node.data < current.data) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.data > current.data) {
        if(!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
};

BinarySearchTree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.slice(0, -2).trim());
};

BinarySearchTree.prototype.getMin = function(node) {
  if(!node) node = this.root;
  while(node.left) node = node.left;
  return node.data;
};

BinarySearchTree.prototype.getMax = function(node) {
  if(!node) node = this.root;
  while(node.right) node = node.right;
  return node.data;
};

BinarySearchTree.prototype.remove = function(data) {
  var that = this;
  var removeNode = function(node, data) {
    if(!node) return null;
    if(data === node.data) {
      if(!node.left && !node.right) return null;
      if(!node.left) return node.right;
      if(!node.right) return node.left;
      // 2 children
      var temp = that.getMin(node.right);
      node.data = temp;
      node.right = removeNode(node.right, temp);
      return node;
    } else if(data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  };
  this.root = removeNode(this.root, data);
};

var binarySearchTree = new BinarySearchTree();
binarySearchTree.add(15);
binarySearchTree.add(9);
binarySearchTree.add(22);
binarySearchTree.add(5);
binarySearchTree.add(13);
binarySearchTree.add(25);
binarySearchTree.add(11);
binarySearchTree.add(14);
binarySearchTree.add(10);
binarySearchTree.add(12);

console.log(binarySearchTree.print());
binarySearchTree.remove(9);
console.log(binarySearchTree.print());


