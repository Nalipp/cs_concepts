var medianSlidingWindow = function(nums, k) {
  let results = [];

  for (let i = 0; i + k <= nums.length; i += 1) {
    let curArr = [];
    let j = i;

    while (j < i + k) {
      curArr.push(nums[j]);
      j += 1;
    }

    results.push(getMedianVal(curArr));
  }

  return results;
}

var getMedianVal = function(arr) {
  let sorted = arr.sort((a, b) => a - b);

  if (sorted.length % 2 === 1) {
    let mid = Math.floor(sorted.length / 2);

    return sorted[mid];
  } else {
    let i1 = (sorted.length / 2) - 1;
    let i2 = i1 + 1;
    let sum = sorted[i1] + sorted[i2];

    return sum / 2;
  }
}


let arr1 = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(medianSlidingWindow(arr1, 3));
// => [1, -1, -1, 3, 5, 6]

let arr2 = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(medianSlidingWindow(arr2, 4));
// => [0, 1, 1, 4, 5.5]
