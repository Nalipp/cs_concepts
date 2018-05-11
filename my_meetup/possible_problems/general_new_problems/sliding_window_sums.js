// approach O(n + k)

// function slidingWindowSums(arr, w) {
//   let results = [];

//   for (let i = 0; i + w <= arr.length; i += 1) {
//     let curSum = 0;
//     let j = i;

//     while (j < i + w) {
//       curSum += arr[j];
//       j += 1;
//     }

//     results.push(curSum);
//   }

//   return results;
// }


// let arr = [1, 3, -1, -3, 5, 3, 6, 7];
// console.log(slidingWindowSums(arr, 3));
// // => [3, -1, 1, 5, 14, 16]


// ************************************************************ 
// possible solutions

  // approach O(n)
    // function slidingWindowSums(arr, w) {
    //   if (arr.length < w) return [];

    //   let curTotal = arr.reduce((a, n, i) => {
    //     return i < w ? a + n : a + 0;
    //   }, 0);
    //   let results = [curTotal];
    //   let i = 0;
      
    //   while (i + w < arr.length) {
    //     curTotal = (curTotal - arr[i]) + arr[i + w];
    //     results.push(curTotal);

    //     i += 1;
    //   }

    //   return results;
    // }
