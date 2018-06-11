const moveZeros = (nums) => {
  let currentPos = 0;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCount += 1;
    else {
      nums[currentPos] = nums[i];
      currentPos += 1;
    }
  }
  let result = nums.slice(0, nums.length - zeroCount);
  while(zeroCount--) result.push(0);
  return result;
}

let nums = [1, 4, 0, 5, 3, 0, 0, 9];
console.log(moveZeros(nums)); 
