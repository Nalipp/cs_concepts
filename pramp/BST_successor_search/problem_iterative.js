/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/


// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  if (inputNode.right) {
    return findMinNodeInTree(inputNode.right);
  }

  var ancestor = inputNode.parent;
  var child = inputNode;

  while(ancestor && child === ancestor.right) {
    child = ancestor;
    ancestor = child.parent;
  }

  return ancestor;
}

function findMinNodeInTree(node) {
  if (!node) return null;

  while (node.left) {
    node = node.left;
  }

  return node;
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {

    var root = this.root;

    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert it
    var currentNode = root;
    var newNode = new Node(key);

    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your 
// findInOrderSuccessor function on. 
BinarySearchTree.prototype.getNodeByKey = function(key) {
    var currentNode = this.root;

    while(currentNode) {
        if(key === currentNode.key) {
            return currentNode;
        }

        if(key < currentNode.key) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }

    return null;
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20); // 25
bst.insert(9);  // 11
bst.insert(25); // null
bst.insert(5);  // 9
bst.insert(12); // 14
bst.insert(11); // 12
bst.insert(14); // 20

// Get a reference to the node whose key is 9
// var test = bst.getNodeByKey(14);

console.log(bst.findInOrderSuccessor((bst.getNodeByKey(20))).key); // 25
console.log(bst.findInOrderSuccessor((bst.getNodeByKey(9))).key);  // 11
console.log(bst.findInOrderSuccessor((bst.getNodeByKey(25)))); // null
console.log(bst.findInOrderSuccessor((bst.getNodeByKey(5))).key);  // 9
console.log(bst.findInOrderSuccessor((bst.getNodeByKey(12))).key); // 14
console.log(bst.findInOrderSuccessor((bst.getNodeByKey(11))).key); // 12
console.log(bst.findInOrderSuccessor((bst.getNodeByKey(14))).key); // 20

// Find the in order successor of test
// var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
// if(succ) {
//     console.log("Inorder successor of " + test.key + " is " + succ.key);
// } else {
//     console.log("Inorder successor does not exist");
// }
