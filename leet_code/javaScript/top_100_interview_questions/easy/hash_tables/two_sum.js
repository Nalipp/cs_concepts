var twoSum = function(nums, target) {
  let map = {};
  for (var i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map[diff] === undefined) {
      map[nums[i]] = i;
    }
    else return [map[diff], i];
  }
  return [];
};

// let nums = [1, 2, 4, 15, 9, 12, 11, 8];
// let target = 15;
let nums = [3, 3];
let target = 6;

console.log(twoSum(nums, target));
