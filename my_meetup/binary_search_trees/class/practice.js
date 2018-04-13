// function node(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// let n1 = new node(15);
// n1.left = new node(2);
// n1.right = new node(17);
// n1.left.left = new node(5);
// n1.left.right = new node(19);
// n1.right.left = new node(11);

// function iterate(head, cb) {
//   if (!head) return null;
//   console.log(cb(head));
//   iterate(head.left, cb);
//   iterate(head.right, cb);
// }

// iterate(n1, function(node) {
//   return node.val * 2;
// });


// function invertBinaryTree(node) {
//   if (node) {
//     let temp = node.right;
//     node.right = invertBinaryTree(node.left);
//     node.left = invertBinaryTree(temp)
//   }
//   return node;
// }

// console.log(invertBinaryTree(n1));


function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let n1 = new node(3);
n1.left = new node(4);
n1.right = new node(9);
n1.right.left = new node(5);
n1.right.right = new node(8);
n1.right.right.right = new node(1);
n1.right.right.right.left = new node(3);

function findMaxDepth(root) {
  if (!root) return 0;
  let leftTotal = findMaxDepth(root.left) + 1; 
  let rightTotal = findMaxDepth(root.right) + 1;
  return Math.max(leftTotal, rightTotal);
}

console.log(findMaxDepth(n1));

//     3 
//    / \
//   4   9
//      / \
//     5   8
//          \
//           5
//          /
//         4
