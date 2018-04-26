// given an array of unique integers
// find the pairs of values that when added together are divisible by 5
// return the index pairs in an array of arrays
//
// input  : [2, 4, 8, 7]
// output : [[0, 2], [2, 3]]


// **************************************************
// Your code
// **************************************************


function divisableByFive(arr) {
  var results = [];

  for (var i = 0; i < arr.length - 1; i++) {
    var first = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      var second = arr[j];
      var sum = first + second;

      if (sum % 5 === 0) {
        results.push([i, j]);
      }
    }
  }
  return results;
}


console.log(divisableByFive([2, 4, 8, 7]));
// => [[0, 2], [2, 3]]
            //
console.log(divisableByFive([2, 4, 7, 11, 0, 3, 1, 9])); 
// => [[0, 5], [1, 3], [1, 6], [2, 5], [3, 7], [6, 7]];














//**************************************************
// Solution
// **************************************************



// O(n)2
//
// function divisableByFive(arr) {
//   var results = [];

//   for (var i = 0; i < arr.length - 1; i++) {
//     var first = arr[i];

//     for (var j = i + 1; j < arr.length; j++) {
//       var second = arr[j];
//       var sum = first + second;

//       if (sum % 5 === 0) {
//         results.push([i, j]);
//       }
//     }
//   }
//   return results;
// }
