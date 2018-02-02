function add(nums, pos) {
  pos = pos || 0;
  if (pos === nums.length) return 0;
  return nums[pos] + add(nums, pos + 1);
}

console.log(add([1, 2, 3, 4]));
