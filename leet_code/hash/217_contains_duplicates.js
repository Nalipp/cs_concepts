// Given an array of integers, 
// Return true if the array contains any duplicates else return false;

var containsDuplicate = function(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    var num = nums[i];

    if (hash[num]) {
      return true;
    } else {
      hash[num] = true;
    }
  }  

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6])); // false
console.log(containsDuplicate([1, 5, 3, 7, 6, 9, 3])); // true
