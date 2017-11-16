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

  BST.prototype.min = function(node) {
    if (!node) node = this;
    if (node.left) return node.left.min();
    else return node;
  }

  BST.prototype.max = function(node) {
    if (!node) node = this;
    if (node.right) return node.right.max();
    else return node;
  }

  // BST.prototype.min = function() {
  //   if (this.left) return this.left.min();
  //   else return this;
  // }

  // BST.prototype.max = function() {
  //   if (this.right) return this.right.max();
  //   else return this;
  // }

  BST.prototype.remove = function(removeVal) {           // 9
    console.log(this.val);                               // 9
    console.log(this.left);                               
    console.log(this.right);                               
    if(removeVal === this.val) {                         // 9 === 9
      if(!this.left && !this.right) return null;
      if(!this.left) return this.right; 
      if(!this.right) return this.left;
      // 2 children
      
      console.log('!!!!');
      temp = this.min(this.right);
      console.log('!!!!', temp);
      this.val = temp.val;
      this.right.remove(removeVal);
      return this;
    }

    if (removeVal < this.val) {                          // 9 < 15
      if (this.left) this.left.remove(removeVal);        
      return this;
    } else {
      if (this.right) this.right.remove(removeVal);
      return this;
    }
  };

  return {
    BST: BST
  }
})();

module.exports = BSTRepo;

let tree = new BSTRepo.BST(15);

tree.insert(9);
tree.insert(22);
tree.insert(5);
tree.insert(13);
tree.insert(25);
tree.insert(11);
tree.insert(14);
tree.insert(10);
tree.insert(12);

console.log('-------------------print---------------------');
tree.BFSIterator((n) => console.log(n.val));

console.log('-------------------remove---------------------');
tree.remove(10);

console.log('-------------------print---------------------');
tree.BFSIterator((n) => console.log(n.val));


// contains
// getHeight
// isBalanced
