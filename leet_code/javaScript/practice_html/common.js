var twoSum = function(nums, target) {
  let map = {};
  for (var i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map[diff]) {
      return [map[diff], nums[i]];
    }
    map[diff] = nums[i];
  }
  return [];
};


let nums = [2, 4, 15, 11, 3];
let target = 15;

console.log('result', twoSum(nums, target));
