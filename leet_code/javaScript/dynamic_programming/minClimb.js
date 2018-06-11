function minCostClimgingStairs(arr) {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];
  let c1 = 0;
  let c2 = 0;
  arr.push(0);

  let min;
  let c;
  for (let i = 0; i < arr.length; i++) {
    c = Math.min(arr[i] + c1, arr[i] + c2)
    c1 = c2;
    c2 = c;
  }
  return Math.min(c, c2);
}

// class Solution {
//     public int minCostClimbingStairs(int[] cost) {
//         int f1 = 0, f2 = 0;
//         for (int i = cost.length - 1; i >= 0; --i) {
//             int f0 = cost[i] + Math.min(f1, f2);
//             f2 = f1;
//             f1 = f0;
//         }
//         return Math.min(f1, f2);
//     }
// }

// console.log(minCostClimgingStairs([0, 0, 0, 1]));
console.log(minCostClimgingStairs([2, 4, 9, 7, 6, 8]));
// console.log(minCostClimgingStairs([10, 15, 20]));
// console.log(minCostClimgingStairs([10, 15, 20, 18, 22]));
// console.log(minCostClimgingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));


// recursion
  // if (!arr.length) return 0;
  // let cp = arr.slice();
  // cp.unshift(0);

  // function inner(i) {
  //   if (i >= cp.length) return 0;
  //   let x = inner(i + 1) + cp[i];
  //   let y = inner(i + 2) + cp[i];
  //   return Math.min(x, y);
  // }
  // return inner(0);


// memoization (not working)
  // if (!arr.length) return 0;
  // let hash = {};
  // let cp = arr.slice();
  // cp.unshift(0);
  // cp.push(0);

  // function inner(i) {
  //   var x;
  //   var y;

  //   if (i >= cp.length) return 0;

  //   if (hash[i + 1] !== undefined) {
  //     x = hash[i + 1];
  //   } else {
  //     x = hash[i + 1] = inner(i + 1) + cp[i];
  //   }

  //   if (hash[i + 2] !== undefined) {
  //     y = hash[i + 2];
  //   } else {
  //     y = hash[i + 2] = inner(i + 2) + cp[i];
  //   }

  //   return Math.min(x, y);
  // }
  // return inner(0);


  // buttom up db not working
