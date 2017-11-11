let BSTRepo = (() => {
  function BST(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }

  BST.prototype.insert = function(newVal) {
    if (!this.val) this.val = newVal;

    if (newVal < this.val) {
      if (!this.left) this.left = new BST(newVal);
      else this.left.insert(newVal);
    }

    if (newVal > this.val) {
      if (!this.right) this.right = new BST(newVal);
      else this.right.insert(newVal);
    }
    return this;
  }

  BST.prototype.contains = function(findVal) {
    if (this.val === findVal) return true;

    if (findVal < this.val) {
      if (!this.left) return false;
      return this.left.contains(findVal);
    }
    if (findVal > this.val) {
      if (!this.right) return false;
      return this.right.contains(findVal);
    }
  }

  BST.prototype.toOrderedArray = function() {
    let arr = [];

    if (!this.val) return arr;

    if (this.left) arr = arr.concat(this.left.toOrderedArray());
    arr.push(this.val);
    if (this.right) arr = arr.concat(this.right.toOrderedArray());

    return arr;
  };

  BST.prototype.BFSIterator = function(callback) {
    let queue = [this];

    while (queue.length) {
      let currentNode = queue.shift();
      callback(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  BST.prototype.DFSPreOrderIterator = function(callback) {
    if (this) {
      let traverse = (cur) => {
        callback(cur);
        if (cur.left) traverse(cur.left);
        if (cur.right) traverse(cur.right);
      }
      traverse(this);
    }
  };

  BST.prototype.DFSInOrderIterator = function(callback) {
    if (this) {
      let traverse = (cur) => {
        if (cur.left) traverse(cur.left);
        callback(cur);
        if (cur.right) traverse(cur.right);
      }
      traverse(this);
    }
  };

  BST.prototype.DFSPostOrderIterator = function(callback) {
    if (this) {
      let traverse = (cur) => {
        if (cur.left) traverse(cur.left);
        if (cur.right) traverse(cur.right);
        callback(cur);
      }
      traverse(this);
    }
  };

  BST.prototype.remove = function(removeVal) {
    var that = this;

    var removeNode = function(node, removeVal) {
      if(!node) return null;

      if(removeVal === node.val) {
        if(!node.left && !node.right) return null;
        if(!node.left) return node.right;
        if(!node.right) return node.left;
        // 2 children
        var temp = that.min(node.right);
        node.val = temp;
        node.right = removeNode(node.right, temp);
        return node;
      }

      if (removeVal < node.val) {
        node.left = removeNode(node.left, removeVal);
        return node;
      } else {
        node.right = removeNode(node.right, removeVal);
        return node;
      }
    };
    this.root = removeNode(this.root, removeVal);
  };

  BST.prototype.min = function(node) {
    if (!node) node = node.root();
    if (node.left) this.min(node.left);
    return node.val;
  }

  BST.prototype.max = function(node) {
    if (!node) node = node.root();
    if (node.right) this.min(node.right);
    return node.val;
  }

  BST.prototype.min = function() {
    if (this.left) return this.left.min();
    else return this;
  }

  BST.prototype.max = function() {
    if (this.right) return this.right.max();
    else return this;
  }

  return {
    BST: BST
  }
})();

module.exports = BSTRepo;
