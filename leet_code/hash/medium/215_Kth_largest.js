var findKthLargest = function(nums, k) {
  var sorted = nums.sort((a, b) => b - a);
  
  return sorted[k - 1];
};

console.log(findKthLargest([3,2,1,5,6,4], 2));


