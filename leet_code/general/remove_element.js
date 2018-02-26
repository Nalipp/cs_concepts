function remove(nums, val) {
  let p = 1;
  let max = nums.length
  for (let i = 0; i < max; i++) {
    if (nums[i] === val || !nums[i]) {
      while (nums[i + p] === val || nums[i + p] === null) {
        if (i + p > max) return nums;
        p += 1;
      }
      nums[i] = nums[i + p];
      nums[i + p] = null;
      p = 1;
    }
  }
  return nums;
}

// console.log(remove([3,3,4,9,3,2,3,0,3,7], 3));
// console.log(remove([], 3));
// console.log(remove([3,2,2,3], 3));
console.log(remove([2,2,1,0,2,0,0,4], 4));

