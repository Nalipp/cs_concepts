// given an array of integers
// find the pairs of values that when added together equal 10
// return the index pairs in an array of arrays
//
// input  : [2, 4, 3, 8, 6]
// output : [[0, 8], [1, 4]]


// **************************************************
// Your code
// **************************************************


function findPairsSumTen(arr) {
  // code goes here
}

console.log(findPairsSumTen([2, 7, 8, 9, 4, 3, 1])); 
// => [[0, 2], [1, 5], [3, 6]]














//**************************************************
// Solution
// **************************************************



// function findPairsSumTen(arr) {
//   var results = [];
//   var hash = {};

//   for (var i = 0; i < arr.length; i++) {
//     hash[arr[i]] = i;
//   }

//   for (var j = 0; j < arr.length; j++) {
//     var num = arr[j];
//     var match = 10 - num;

//     if (hash[match]) {
//       results.push([j, hash[match]]);
//       delete hash[num];
//       delete hash[match];
//     }
//   }

//   return results;
// }

// console.log(findPairsSumTen([2, 7, 8, 9, 4, 3, 1])); // => [[0, 2], [1, 5], [3, 6]]
