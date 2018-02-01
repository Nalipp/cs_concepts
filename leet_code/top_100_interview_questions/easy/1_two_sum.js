var twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[target - nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) { 
    let match = hash[nums[i]];
    if (match) return [i, match]
  }
  return [-1, -1];
};

var nums = [2, 7, 11, 15, 99];
var target = 22;
console.log(twoSum(nums, target)); 
