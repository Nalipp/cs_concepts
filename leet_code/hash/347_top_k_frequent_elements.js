var topKFrequent = function(nums, k) {
  var results = [];
  var hash = countHash(nums);

  var sorted = Object.entries(hash).sort((a, b) => a[1] - b[1]);

  while (results.length < k) {
    var cur = sorted.pop();
    results.push(Number(cur[0]));
  }

  return results;
}

function countHash(arr) {
  var hash = {};

  for (var val of arr) {
    if (hash[val]) {
      hash[val] += 1;
    } else {
      hash[val] = 1;
    }
  }

  return hash;
}



console.log(topKFrequent([1,1,1,2,2,3], 2)); // => [1, 2]
console.log(topKFrequent([2, 2, 3, 2, 3, 1, 2, 3, 4, 1], 2)); // => [2, 3]
console.log(topKFrequent([1, 2], 2)); // => [1, 2]
console.log(topKFrequent([1, 1, 1, 2, 3, 3, 4, 4, 5, 5], 3)); // => [1, 3, 4]
console.log(topKFrequent([0,0,1,3], 1)); // => [0]


// function topKFrequent(nums, k) {
//   var topAndHash = createHash(nums);
//   var top = topAndHash[0];
//   var hash = topAndHash[1];
//   var results = [];

//   while (results.length < k) {
//     var valueArr = hash[top];

//     while (valueArr && valueArr.length && results.length !== k) {
//       results.push(valueArr.shift());
//     }

//     top -= 1;
//   }

//   return results;
// };


// function createHash(arr) {
//   var maxCount = 0;
//   var hash = {};
//   var curCount = 1;

//   for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];

//     if (num === arr[i + 1]) {
//       curCount++;

//     } else {

//       if (hash[curCount]) {
//         hash[curCount].push(num);

//       } else {
//         hash[curCount] = [num];
//       }

//       maxCount = Math.max(maxCount, curCount);
//       curCount = 1;
//     }
//   }

//   return [maxCount, hash];
// }
