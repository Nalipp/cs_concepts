// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(v => v.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    if (!this.root) return null;
    const arr = [this.root]

    while (arr.length) {
      let current = arr.shift();
      arr.push(...current.children);
      fn(current);
    }
  }

  traverseDF(fn) {
    if (!this.root) return null;
    let arr = [this.root]

    while (arr.length) {
      let current = arr.shift();
      arr.unshift(...current.children);
      fn(current);
    }
  }
}

// let tree = new Tree();
// let n1 = new Node(1);
// tree.root = n1;

// n1.children.push(new Node(2));
// n1.children.push(new Node(3));

// // console.log(tree.root);

// tree.traverseBF((node) => {
//   console.log(node.data);
// });

module.exports = { Tree, Node };
