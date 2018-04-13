var containsDuplicate = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return true;
    else hash[nums[i]] = true;
  }  
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6])); // false
console.log(containsDuplicate([1, 2, 3, 3, 4])); // true
