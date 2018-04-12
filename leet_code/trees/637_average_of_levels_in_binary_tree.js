// **************************************************
// Setup
// **************************************************

function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let n1 = new node(15);
n1.left = new node(8);
n1.right = new node(22);
n1.left.left = new node(5);
n1.left.right = new node(10);
n1.right.left = new node(18);
n1.right.left.right = new node(18);


// **************************************************
// Your code
// **************************************************

var averageOfLevels = function(root) {
// code goes here
};

console.log(averageOfLevels(n1));  // => [ 15, 15, 11, 18 ]




// **************************************************
// Solution 
// **************************************************

// var averageOfLevels = function(root) {
//   let results = [];
//   let currentCount = 0;
//   let currentTotal = 0;
//   if (!root) return results;
//   let queue = [root, null];
//   while (queue.length) {
//     let current = queue.shift();
//     if (current === null) {
//       let average = currentTotal / currentCount;
//       results.push(average);
//       if (queue.length) queue.push(null);
//       currentCount = 0;
//       currentTotal = 0;
//     } else {
//       currentCount += 1;
//       currentTotal += current.val;
//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//     }
//   }
//   return results;
// };
