var checkPossibility = function(nums) {
  var wasModified = false;

  for (var i = 0; i < nums.length - 1; i += 1) {
    debugger;
    var cur = nums[i];
    var next = nums[i + 1];

    if (cur > next) {
      if (wasModified === true) {
        return false;
      } else {
        wasModified = true;

        if (i < nums.length - 2 && nums[i] > nums[i + 2] && i > 0 && nums[i - 1] > nums[i + 1]) {
          return false;
        }
      }
    }
  }

  return true;
};

console.log(checkPossibility([4,2,3])); // => true
console.log(checkPossibility([4,2,1])); // => false
console.log(checkPossibility([3,4,2,3])); // => false
console.log(checkPossibility([-1,4,2,3])); // => true 
console.log(checkPossibility([2,3,3,2,4])); // => true;
