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

BST.prototype.DFSPreOrder = function() {

}

// BinarySearchTree.prototype.preOrder = function() {
//     var result = [];
//     var node = this.root;
//     var traverse = function(node) {
//         result.push(node.value);
//         node.left && traverse(node.left);
//         node.right && traverse(node.right);
//     };
//     traverse(node);
//     return result;
// };

let tree = new BST();

tree.insert(12);
tree.insert(23);
tree.insert(44);

console.log(tree);
