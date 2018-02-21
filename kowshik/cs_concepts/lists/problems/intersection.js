var intersection = function(nums1, nums2) {
  let arr1 = [];
  let arr2 = [];
  let results = [];

  for (let num of nums1) arr1[num] = true;
  for (let num of nums2) arr2[num] = true;

  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let count = 0;

  while (count < arr1Length && count < arr2Length) {
    if (arr1[count] && arr2[count]) results.push(count);
    count += 1;
  }

  return results;
};

nums1 = [1, 1, 2, 2, 4, 7];
nums2 = [1, 2, 3, 4, 5, 6, 7];

console.log(intersection(nums1, nums2));
