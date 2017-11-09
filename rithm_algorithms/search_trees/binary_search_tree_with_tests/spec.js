var Repo = require('./searchTree');
var chai = require('chai');

var expect = chai.expect;
var bst1;

beforeEach(function() {
  bst1 = new Repo.BST(15);
})

describe("#Binary Search Tree", function() {
  it("contains val, left, and right properties", function() {
    expect(bst1.hasOwnProperty('val')).to.equal(true);
    expect(bst1.hasOwnProperty('left')).to.equal(true);
    expect(bst1.hasOwnProperty('right')).to.equal(true);
    expect(bst1.val).to.equal(15);
    expect(bst1.left).to.equal(null);
    expect(bst1.right).to.equal(null);
  });
});

describe("#insert", function() {
  it("inserts a value as the root if root is undefined", function() {
    bst2 = new Repo.BST(20);
    bst2.insert(20);
    expect(bst2.val).to.deep.equal(20);
    expect(bst2.left).to.equal(null);
    expect(bst2.right).to.equal(null);
  });
  it("inserts a node at the correct position", function() {
    bst1.insert(10);
    bst1.insert(5);
    bst1.insert(22);
    bst1.insert(12);
    bst1.insert(25);
    expect(bst1.val).to.deep.equal(15);
    expect(bst1.left.val).to.deep.equal(10);
    expect(bst1.left.left.val).to.deep.equal(5);
    expect(bst1.right.val).to.deep.equal(22);
    expect(bst1.left.right.val).to.deep.equal(12);
    expect(bst1.right.right.val).to.deep.equal(25);
  });
  it("returns the BST so that the method can be chained", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    expect(bst1.left.val).to.deep.equal(10);
    expect(bst1.right.val).to.deep.equal(22);
    expect(bst1.right.right.val).to.deep.equal(25);
  });
});

describe("#contains", function() {
  it("checks if the BST contains a node value", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    var result = bst1.contains(22);
    expect(result).to.equal(true);
    var result = bst1.contains(92);
    expect(result).to.equal(false);
  });
});

describe("#BFSIterator", function() {
  it("performs an iteration on each node using BFS", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    var array = [];
    bst1.BFSIterator((node) => array.push(node.val));
    expect(array).to.deep.equal([ 15, 10, 22, 5, 12, 25 ]);
  });
});

describe("#DFSPreOrderIterator", function() {
  it("performs a Pre Oder Depth First Search iteration", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    var array = [];
    bst1.DFSPreOrderIterator((node) => array.push(node.val));
    // expect(array).to.deep.equal([ 15, 10, 22, 5, 12, 25 ]);
  });
});
describe("#DFSInOrderIterator", function() {
  it("performs an In Oder Depth First Search iteration", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    var array = [];
    bst1.DFSInOrderIterator((node) => array.push(node.val));
  //   expect(array).to.deep.equal([ 15, 10, 22, 5, 12, 25 ]);
  });
});
describe("#DFSPostOrderIterator", function() {
  it("performs a Post Oder Depth First Search iteration", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    var array = [];
    bst1.DFSPostOrderIterator((node) => array.push(node.val));
  //   expect(array).to.deep.equal([ 15, 10, 22, 5, 12, 25 ]);
  });
});

describe("#min", function() {
  it("returns the minimum value in the tree", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    var result = bst1.min();
    expect(result.val).to.equal(5);
  });
});

describe("#max", function() {
  it("returns the maximum value in the tree", function() {
    bst1.insert(10).insert(5).insert(22).insert(12).insert(25);
    let result = bst1.max();
    expect(result.val).to.equal(25);
  });
});


// describe("#DFSPreOrder", function(){
//   it("returns an array of values found with DFS Pre Order", function(){
//     bst1.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
//     expect(bst1.DFSPreOrder()).to.deep.equal([15, 10, 1, 5, 12, 20, 50])
//   });
// });

// describe("#DFSInOrder", function(){


//   it("returns an array of values found with DFS In Order", function(){
//     bst1.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
//     expect(bst1.DFSInOrder()).to.deep.equal([1, 5, 10, 12, 15, 20, 50])
//   });
// });

// describe("#DFSPostOrder", function(){


//   it("returns an array of values found with DFS Post Order", function(){
//     bst1.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
//     expect(bst1.DFSPostOrder()).to.deep.equal([5, 1, 12, 10, 50, 20, 15])
//   });
// });

// describe("#BreadthFirstSearch", function(){
//   it("returns an array of values found with Breadth First Search", function(){
//     bst1.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
//     expect(bst1.breadthFirstSearch()).to.deep.equal([15, 10, 20, 1, 12, 50, 5])
//   });
// });

// describe("#remove", function(){
//   it("should correctly remove a node with no children", function(){
//     bst1.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)
//     bst1.remove(50)
//     expect(bst1.root.right.value).to.equal(20)
//     expect(bst1.root.right.right).to.equal(null)

//     bst1.remove(5)
//     expect(bst1.root.left.left.value).to.equal(1)
//     expect(bst1.root.left.left.right).to.equal(null)
//   });
//   it("should correctly remove a node with one child", function(){
//     bst1.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50)

//     bst1.remove(1)
//     expect(bst1.root.left.left.value).to.equal(5)
//     expect(bst1.root.left.left.left).to.equal(null)
//     expect(bst1.root.left.left.right).to.equal(null)

//     bst1.remove(20)
//     expect(bst1.root.right.value).to.equal(50)
//     expect(bst1.root.right.right).to.equal(null)
//     expect(bst1.root.right.left).to.equal(null)
//   });
//   it("should correctly remove a node with two children", function(){

//     bst1.insertIteratively(15).insertIteratively(20).insertIteratively(10).insertIteratively(12).insertIteratively(1).insertIteratively(5).insertIteratively(50).insertIteratively(60).insertIteratively(30).insertIteratively(25).insertIteratively(23).insertIteratively(24).insertIteratively(70)

//     bst1.remove(10)
//     expect(bst1.root.left.value).to.equal(12)
//     expect(bst1.root.left.left.value).to.equal(1)
//     expect(bst1.root.left.left.right.value).to.equal(5)

//     bst1.remove(50)
//     expect(bst1.root.right.value).to.equal(20)
//     expect(bst1.root.right.right.value).to.equal(60)
//     expect(bst1.root.right.right.left.value).to.equal(30)
//   });
// });
