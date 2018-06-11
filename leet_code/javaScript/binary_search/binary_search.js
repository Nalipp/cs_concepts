function binarySearch(nums, target) {
  let min = -1;
  let max = nums.length;
  let mid = Math.floor(max / 2);
  while ((max - min) > 1) {
    if (target < nums[mid]) max = mid;
    else min = mid;
    mid = Math.floor((max + min) / 2);
  }
  if (target === nums[min]) return min
  if (target === nums[max]) return max
  else return min + 1;
}

// console.log(binarySearch([1, 3, 5, 6], 3)); // 1
// console.log(binarySearch([1, 3, 5, 6], 2)); // 1
// console.log(binarySearch([1, 3, 5, 6], 0)); // 0
// console.log(binarySearch([1, 3, 5, 6], 7)); // 4
// console.log(binarySearch([1, 3, 5, 6], 6)); // 3
// console.log(binarySearch([], 6)); // 0
