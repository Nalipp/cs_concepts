var topKFrequent = function(nums, k) {
  let h1 = {};
  let h2 = {};
  let results = [];
  let frequencies = [];

  for (let i = 0; i < nums.length; i++) {
    if (!h1[nums[i]]) h1[nums[i]] = 1;
    else h1[nums[i]] += 1;
  }

  for (let k in h1) {
    h2[h1[k]] = k;
    frequencies.push(h1[k]);
  }

  let sorted = frequencies.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    results.push(h2[sorted[i]]);
  }

  console.log(h1);
  console.log(h2);
};

// console.log(topKFrequent([1,1,1,2,2,3], 2)); // => [1, 2]
// console.log(topKFrequent([2, 2, 3, 2, 3, 1, 2, 3, 4, 1], 2)); // => [2, 3]
console.log(topKFrequent([1, 2], 2)); // => [1, 2]
