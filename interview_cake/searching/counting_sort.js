let countingSort = (nums, max) => {
  let counts = new Map;
  let sorted = [];
  for (let i = 0; i <= max; i++) {
    counts.set(i, 0);
  }
  for (let i = 0; i < nums.length; i++) {
    counts.set(nums[i], counts.get(nums[i]) + 1);
  }
  counts.forEach((v, k) => {
    while (v > 0) {
      sorted.push(k);
      v--;
    }
  });
  
  return sorted;
}

console.log(countingSort([10, 9, 3, 4, 3, 5, 4], 10)); // [3, 3, 4, 4, 5, 9, 10]
// console.log(countingSort([10, 9, 3, 4, 3, 5, 4, 3, 4, 4, 5, 6, 7, 8, 9, ,8 ,9 ,8 ,7 ,6 ,6 , 6, 6, 7], 10));


  // function countingSort(theArray, maxValue) {
  //   var numCounts = [];
  //   for (var i = 0; i < maxValue + 1; i++) {
  //       numCounts[i] = 0;
  //   }

  //   // populate numCounts
  //   theArray.forEach(function(num) {
  //       numCounts[num] += 1;
  //   });

  //   // populate the final sorted array
  //   var sortedArray = [];
  //   var currentSortedIndex = 0;

  //   // for each num in numCounts
  //   for (var num = 0; num < numCounts.length; num++) {
  //       var count = numCounts[num];

  //       // for the number of times the item occurs
  //       for (var i = 0; i < count; i++) {

  //           // add it to the sorted array
  //           sortedArray[currentSortedIndex] = num;
  //           currentSortedIndex++;
  //       }
  //   }

  //   return sortedArray;
// }
// console.log(countingSort([10, 9, 3, 4, 3, 5, 4], 10)); // [3, 3, 4, 4, 5, 9, 10]
// console.log(countingSort([10, 9, 3, 4, 3, 5, 4, 3, 4, 4, 5, 6, 7, 8, 9, ,8 ,9 ,8 ,7 ,6 ,6 , 6, 6, 7], 10));
