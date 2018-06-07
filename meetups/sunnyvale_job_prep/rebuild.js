const preOrder = [19, 7, 3, 2, 5, 11, 17, 13, 43, 23, 37, 29, 31, 41, 47, 53];

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function reBuild(arr, min = -Infinity, max = Infinity) {
  let index = 0;

  return (function recurse(min, max) {
  	if (index === arr.length) {
      return null;
    }
    const val = arr[index];
    if (!(min <= val && val <= max)) {
      return null;
    }
    index++;
    return {
      val,
      left: recurse(min, val),
      right: recurse(val, max)
    };
  })(-Infinity, Infinity);

}

console.log(JSON.stringify(reBuild(preOrder)));


// // student1

// // question 1 rebuild the binary search given the preorder array 6:44pm
// const preOrder = [19, 7, 3, 2, 5, 11, 17, 13, 43, 23, 37, 29, 31, 41, 47, 53];
// //[7, 3, 2, 5, 11, 17, 13, 43, 23, 37, 29, 31, 41, 47, 53];

// function rebuild(arr, min = -Infinity, max = Infinity) {
//   if (arr.length === 0 || arr[0] < min || arr[0] > max)
//     return null;
//   let node = {
//     val: arr[0]
//   }
//   arr.splice(0,1)
//   node.left = rebuild(arr, min, node.val)
//   node.right = rebuild(arr, node.val, max)
  
//   return node;
// }

// console.log(JSON.stringify(reBuild(preOrder), null, 2));

// // instructor

// function reBuild(arr) {
//   let index = 0;
//   return (function recurse(min, max) {
//   	if (index === arr.length) {
//       return null;
//     }
//     const val = arr[index];
//     if (!(min <= val && val <= max)) {
//       return null;
//     }
//     index++;
//     return {
//       val,
//       left: recurse(min, val),
//       right: recurse(val, max)
//     };
//   })(-Infinity, Infinity);
// }

// student 3 post order search

  // if (!arr || !arr.length || start >= end) {
  //   return;
  // }

  // let result = {
  //   val: arr[start]
  // };

  // let split;
  // for (split = start; split < end && arr[split] <= arr[start]; split++) {
  // }

  // let left = rebuild(arr, start + 1, split);
  // if (left) {
  //   result.left = left;
  // }
  // let right = rebuild(arr, split, end);
  // if (right) {
  //   result.right = right;
  // }
  // return result;
