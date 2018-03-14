var findDisappearedNumbers = function (nums) {
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    result.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    delete result[nums[i] - 1];
  }
  return result.filter(v => v);
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
