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

  BinarySearchTree.prototype.findRecursively = function(cur=this.root, nVal) {
    console.log(cur)
    if (cur.value === nVal) return cur;
    else if (cur.left) findRecursively(cur = cur.left, nVal);
    else if (cur.right) this.right.findRecursively(cur = cur.right, nVal);
    else return undefined
  }

  BinarySearchTree.prototype.get = function(cur, nVal) {
    // console.log(nVal);
    // console.log(cur.value);
    // console.log(cur.value === nVal); 

    // // return cur;

    // if (cur.value === nVal) return '&)&)&)&)&)&)&)&)&)&)&)&)&)&)&)&)&)&)&)&)a'
    // else if (cur.left) this.get(cur = cur.left, nVal);
    // else if (cur.right) this.get(cur = cur.right, nVal);
    // else return undefined;



    // if (nVal < cur.value) {
    //   if (!cur.left) return undefined;
    //   if (cur.left.value === nVal) return cur.left;
    //   return this.get(cur = cur.left);
    // }
    // if (nVal > cur.value) {
    //   if (!cur.right) return undefined;
    //   if (cur.right.value === nVal) return cur.right;
    //   return this.get(cur = cur.right);
    // }
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

  BinarySearchTree.prototype.toArray = function(node=this.root) {
    arr = [];

    if (!node) {
      return arr;
    }

    if (node.left) {
      arr = arr.concat(this.toArray(node.left));
    }

    arr.push(node.value);

    if(node.right) {
      arr = arr.concat(this.toArray(node.right));
    }

    return arr;
  }

  return {
    Node: Node,
    BinarySearchTree: BinarySearchTree
  }
})();

module.exports = Repo;
