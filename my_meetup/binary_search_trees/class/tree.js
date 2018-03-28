function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let n1 = new node(15);
n1.left = new node(8);
n1.right = new node(22);
n1.left.left = new node(5);
n1.left.right = new node(2);
n1.right.left = new node(16);

module.exports = n1;


//       15
//     /    \
//    8     22
//   / \    / \
//  5   12 16  n
