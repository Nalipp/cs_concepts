// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// [3, 4, 5, 6]
// base - infinity

// 3
// 3 + -4
// 3 + -4 + 5
// 3 + -4 + 5 + -6
//
// -4
// -4 + 5
// -4 + 5 + -6
//
// 5
// 5 + -6
// 
// -6


var maxSubArray = function(nums) {
  let maxVal = -Number.MAX_VALUE;
 
  for (i = 0; i < nums.length; i++) {
    let currentSum = nums[i];
    maxVal = Math.max(currentSum, maxVal);
    for (j = i + 1; j < nums.length; j++) {
      currentSum += nums[j];
      maxVal = Math.max(currentSum, maxVal);
    }
  }
  return maxVal;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // [4,-1,2,1]          -> 6
console.log(maxSubArray([3, -4, 5, -6]));             // [5]              -> 5
console.log(maxSubArray([3, 4, 5, 6]));               // [3, 4, 5, 6]     -> 18
console.log(maxSubArray([3, -4, 5, 6]));              // [5, 6]           -> 11
