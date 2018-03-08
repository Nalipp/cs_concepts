function minCostClimgingStairs(arr) {
}

// console.log(minCostClimgingStairs([0, 0, 0, 1]));
console.log(minCostClimgingStairs([2, 4, 9, 7, 6, 8]));

// recursion
  // let hash = {};
  
  // function inner(i, sum) {
  //   console.log(sum);
  //   if (hash[i]) return hash[i];
  //   if (i >= arr.length) return sum;

  //   hash[i + 1] = inner(i + 1, sum + arr[i + 1]);
  //   hash[i + 2] = inner(i + 2, sum + arr[i + 2]);

  //   return Math.min(hash[i + 1], hash[i + 2]); 
  // }
  // return inner(0, 0);


// memoization (not working)
  // let sum = !arr.length ? 0 : arr[0];
  // let hash = {};
  // let x = 0;
  // let y = 0;

  // function inner(i, sum) {
  //   console.log(sum); 
  //   if (!arr[i + 1] || !arr[i + 2]) return sum;

  //   if (arr[i + 1]) {
  //     if (hash[i + 1]) {
  //       x = hash[i + 1];
  //     } else {
  //       x = inner(i + 1, sum + arr[i + 1]);
  //       hash[i + 1] = x;
  //     }
  //   }
  //   if (arr[i + 2]) {
  //     if (hash[i + 2]) {
  //       y = hash[i + 2];
  //     } else {
  //       y = inner(i + 2, sum + arr[i + 2]);
  //       hash[i + 2] = y;
  //     }
  //   }
  //   return Math.min(x, y);
  // }
  // return inner(0, sum);


  // old code
  // if (!arr.length) return 0;
  // if (arr.length === 1) return arr[0];
  // if (arr.length === 2) return arr[0] + arr[1];
  // arr.push(0);

  // let min;
  // for (let i = 3; i < arr.length; i++) {
  //   let prevMin = Math.min(arr[i - 1] + arr[i - 3], arr[i - 1] + arr[i - 2]);
  //   let curMin = Math.min(arr[i] + arr[i - 2], arr[i] + arr[i - 1]);
    
  //   min = Math.min(arr[i] + prevMin, arr[i] + curMin);
  // }
  // return min;
