var sortColors = function(nums) {
  let counts = getCountArr(nums);
  let i = 0;

  for (let key in counts) {
    let val = counts[key];

    for (let j = 0; j < val; j++) {
      nums[i] = Number(key);
      i++;
    }
  }
};

let getCountArr = (nums) => {
  counts = {};
  
  for (let num of nums) {
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  }

  return counts;
}

let nums = [2,0,2,1,1,0,1];
console.log(nums);
sortColors(nums);
console.log(nums);
