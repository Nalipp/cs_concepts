var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// console.log(removeDuplicates([1, 2]));                              // 2
// console.log(removeDuplicates([1, 1]));                              // 1
// console.log(removeDuplicates([1, 1, 2]));                           // 2
// console.log(removeDuplicates([1, 1, 1, 2, 3]));                     // 3
// console.log(removeDuplicates([1, 1, 2, 3, 3, 5, 7, 7, 8, 9]));      // 7
// console.log(removeDuplicates([-10, -10, -8, -3, -3, 0, 0, 1, 1, 2, 3, 3, 5, 7, 7, 8, 9]));   // 11
// console.log(removeDuplicates([]));                                  // 0
// console.log(removeDuplicates([1]));                                 // 1
