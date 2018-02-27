// Question 3
// const tree = { val: 314, left: { val: 6, left: { val: 271, left: { val: 28, left: null, right: null }, right: { val: 0, left: null, right: null } }, right: { val: 561, left: null, right: { val: 3, left: { val: 17, left: null, right: null }, right: null } } }, right: { val: 6, left: { val: 2, left: null, right: { val: 1, left: { val: 401, left: null, right: { val: 641, left: null, right: null } }, right: { val: 257, left: null, right: null } } }, right: { val: 271, left: null, right: { val: 28, left: null, right: null } } } };

// function inOrderSearch(tree) {
//   if (!tree.val) return null;
//   let result = [tree.val];
//   let currentLeft = tree.left;
//   let currentRight = tree.right;
//   while(currentLeft || currentRight) {
//       console.log('currentLeft', currentLeft);
//     if(currentLeft) {
//       console.log('currentLeft', currentLeft);
//       result.push(currentLeft.left);
//       let currentLeft = current.left;
//     }
//     else if(currentLeft && currentLeft.right) {
//       result.push(currentLeft.right);
//       let currentLeft = current.right;
//     }
//     else if(currentRight && currentRight.left) {
//       result.push(currentRight.right);
//       let currentRight = currentRight.left;
//     }
//     else if(currentRight && currentRight.right) {
//       result.push(currentRight.right);
//       let currentRight = currentRight.right;
//     }
//   }
//   return result;
// }

// console.log(inOrderSearch(tree));


// instructor solution

// const tree = { val: 314, left: { val: 6, left: { val: 271, left: { val: 28, left: null, right: null }, right: { val: 0, left: null, right: null } }, right: { val: 561, left: null, right: { val: 3, left: { val: 17, left: null, right: null }, right: null } } }, right: { val: 6, left: { val: 2, left: null, right: { val: 1, left: { val: 401, left: null, right: { val: 641, left: null, right: null } }, right: { val: 257, left: null, right: null } } }, right: { val: 271, left: null, right: { val: 28, left: null, right: null } } } };

// function inOrderSearch(tree) {
//   if (!tree) return null;
//   let res = [];

//   function inner(node) {
//     if (!node) return;
//     res.push(node.val);
//     inner(node.left);
//     inner(node.right);
//   }
//   inner(tree)
//   return res;
// }

// console.log(inOrderSearch(tree)); 

const tree = {
  val: 10,
  left: {
    val: 7,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 20,
    left: null,
    right: null,
  },
}

// teacher solution
function preOrderSearch(tree) {
	const res = [], stack = [];
  let  curr = tree;
  while (curr || stack.length) { 
    if (curr) {                   
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
    }
  }
  return res;
}

console.log(preOrderSearch(tree));


 // 3
// | |
// 1 2
// solution = [2, 3, 1]

// function postOrderSearch(node) {
// 	const res = [], stack = [];
//   let curr = node;
//   while (curr || stack.length) {
//     if (curr) {
//       if (curr.right) {
//         stack.push(curr.right);
//       }
//       stack.push(curr);
//       curr = curr.left;
//     } else {
//       curr = stack.pop();
//       if (curr.right === stack[stack.length - 1]) {
//         const right = stack.pop();
//         stack.push(curr);
//         curr = right;
//       } else {
//         res.push(curr.val);
//         curr = null;
//       }
//     }
//   }
//   return res;
// }

// console.log(postOrderSearch(tree));

