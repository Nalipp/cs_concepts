let Repo = (() => {
  function Node(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }

  function BinarySearchTree(){
      this.root = null;
  }

  BinarySearchTree.prototype.insertRecursively = function(nVal) {
    let newNode = new Node(nVal);
    
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let cur = this.root;
    let self = this;
    function findPosition(cur) {
      if (nVal < cur.value) {
        if (!cur.left) {
          cur.left = newNode;
          return self;
        }
        return findPosition(cur = cur.left);
      }
      if (nVal > cur.value) {
        if (!cur.right) {
          cur.right = newNode;
          return self;
        }
        return findPosition(cur = cur.right);
      }
    }
    return findPosition(cur);
  }

  BinarySearchTree.prototype.insertIteratively = function(nVal) {
    let newNode = new Node(nVal);

    if (!this.root) {
      this.root = newNode;
      return this;
    } 

    let cur = this.root;
    while (true) {
      if (nVal < cur.value) {
        if (!cur.left) {
          cur.left = newNode;
          return this;
        }
        cur = cur.left;
      } 
      else if (nVal > cur.value) {
        if (!cur.right) {
          cur.right = newNode;
          return this;
        } 
        cur = cur.right;
      }
    }
  }

  BinarySearchTree.prototype.findRecursively = function(nVal, cur=this.root) {
    if (cur.value === nVal) return cur;
    else if (cur.left) return this.findRecursively(nVal, cur = cur.left);
    else if (cur.right) return this.findRecursively(nVal, cur = cur.right);
    else return undefined
  }

  BinarySearchTree.prototype.findIteratively = function(nVal) {
    let cur = this.root;
    let found = false;

    if (cur.value === nVal) return cur;

    while (cur && !found) {
      if (nVal > cur.value) cur = cur.right;
      else if (nVal < cur.value) cur = cur.left;
      else found = true;
    }

    if (found) return cur;
    return undefined;
  }

  BinarySearchTree.prototype.DFSPreOrder = function() {
    let cur = this.root;
    let array = [];
    let finished = false;
      
    function find(cur) {
      array.push(cur.value);
      if (cur.left) find(cur.left);
      if (cur.right) find(cur.right);
      else finshed = true;
    }
    
    if (!finished) find(cur);
    return array;
  }

  BinarySearchTree.prototype.toOrderedArray = function(cur=this.root) {
    let arr = [];

    if (!cur) return arr;

    if (cur.left) arr = arr.concat(this.toOrderedArray(cur.left));
    arr.push(cur.value);
    if (cur.right) arr = arr.concat(this.toOrderedArray(cur.right));

    return arr;
  }


  return {
    Node: Node,
    BinarySearchTree: BinarySearchTree
  }
})();

module.exports = Repo;
