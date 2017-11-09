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

  BST.prototype.BFSIterator = function(callBack) {
    let queue = [this];

    while (queue.length) {
      let currentNode = queue.shift();
      callBack(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  BST.prototype.DFSPreOrderIterator = function(callBack) {
  };

  BST.prototype.DFSInOrderIterator = function(callBack) {
  };

  BST.prototype.DFSPostOrderIterator = function(callBack) {
  };

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
