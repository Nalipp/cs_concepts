// house robber

// bottom up db for house robber
// function goldTheif(arr) {
//   if (!arr.length) return 0;
//   if (arr.length === 1) return arr[0];

//   let p2 = arr[0];
//   let p1 = 0;
//   let c = Math.max(p2, p1);

//   for (let i = 1; i < arr.length; i++) {
//     p2 = p1 + arr[i];
//     p1 = c;
//     c = Math.max(p2, p1);
//   }
//   return Math.max(c, p1);
// }

// console.log(goldTheif([-7, -1, -3, -4, -23, -22]));
// console.log(goldTheif([7, 1, 3, 5, 10, 22, 9]));


// top down with memoization
function goldTheif(arr) {
  if (!arr.length) return 0;
  let hash = {};

  function inner(i) {
    if (hash[i] != undefined) return hash[i];
    if (i >= arr.length) return 0;

    let x = hash[i + 1] = inner(i + 1);
    let y = hash[i + 2] = inner(i + 2) + arr[i];

    return Math.max(hash[i + 1], hash[i + 2]);
  }
  return inner(0);
}

console.log(goldTheif([7, 1, 3, 5, 10, 22, 9]));

  
// top down without memoization
// function goldTheif(arr) {
//   if (!arr.length) return 0;

//   function inner(i) {
//     if (i >= arr.length) return 0;
//     let x = arr[i] + inner(i + 2);
//     let y = inner(i + 1);
//     return Math.max(x, y);
//   }

//   return inner(0);
// }

// console.log('result', goldTheif([7, 1, 3, 5, 10, 22, 9]));




// class Solution {
// public:
//    int rob(vector<int>& nums) {
//        if(nums.empty())
//            return 0;
//        return helper(0, nums);
//    }
//    int helper(int i, vector<int>& nums){
//        if(i >= nums.size())
//            return 0;
//        int yes = nums[i] + helper(i + 2, nums);
//        int no = helper(i + 1, nums);
//        return max(yes, no);
//    }
// };
// T.C : O(2^n)

// S.C : O(n)












// let fib = (n, hash={}, count=0) => { 
//   console.log(count); 

//   if (n <= 1) return n;
//   let x;
//   let y;

//   x = hash[n - 1] ? hash[n - 1] : hash[n - 1] = fib(n - 1, hash, count += 1);
//   y = hash[n - 2] ? hash[n - 2] : hash[n - 2] = fib(n - 2, hash, count += 1);

//   return x + y;
// }

// console.log(fib(10));

// let fib = (n, hash={}, count=0) => { 
//   console.log(count++);

//   if (n <= 1) return n;
//   let x;
//   let y;

//   if (hash[n - 1]) {
//     x = hash[n - 1];
//   } else {
//     x = hash[n - 1] = fib(n - 1, hash, count); 
//   }

//   if (hash[n - 2]) {
//     x = hash[n - 2];
//   } else {
//     x = hash[n - 2] = fib(n - 2, hash, count); 
//   }

//   return x + y;
// }

// console.log(fib(10));




