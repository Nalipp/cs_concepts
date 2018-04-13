function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// [3, 4, 5, 8, 9, null, 7];

//       3
//     /   \
//    4     5
//  /   \ /   \
//  8   9 n    7



function buildTreeFromArr(arr) {
  if (!arr.length) return null;
  let head = new node(arr.shift());
  while (arr.length) {
    let newNode = new node(arr.shift());
    let current = head;
    while (current) {
      if (!current.left) {
        current.left = newNode;
        break;
      }
      if (!current.right) {
        current.right = newNode;
        break;
      }
      if (!current.left.left || !current.left.right) current = current.left;
      else if (!current.right.left || !current.right.right) current = current.right;
      else current = current.left;
    }
  }
  return head;
}

let arr = [3, 4, 5, 8, 9, 7];
console.log(buildTreeFromArr(arr));
