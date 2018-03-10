var moveZeroes = function(nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    console.log(nums); 
    if (nums[i] === 0) {
      let j = i + 1;
      while (nums[j] && nums[j] === 0) {
        console.log(count++); 
        if (j >= nums.length) return nums;
        j++;
      }
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i--;
    }
  }
  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12])); 
console.log(moveZeroes([1, 0, 0, 3, 12])); 
