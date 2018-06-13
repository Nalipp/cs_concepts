// Given a sorted array of numbers
// Return an array of the k most common numbers


// **************************************************
// Your code
// **************************************************

function topKFrequent(nums, k) {
  // code here
}


console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); 
// => [1, 2]

console.log(topKFrequent([1, 1, 2, 2, 2, 2, 3, 3, 3, 4], 2));
// => [2, 3]

console.log(topKFrequent([1, 2], 2)); 
// => [1, 2]

console.log(topKFrequent([1, 1, 1, 2, 3, 3, 4, 4, 5, 5], 3)); 
// => [1, 3, 4]

console.log(topKFrequent([0, 0, 1, 3], 1)); 
// => [0]



//**************************************************
// Solutions
// **************************************************


// SOLUTION 1 
// O(n) ??

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


// SOLUTION 2
// O(n log n) ??

// function topKFrequent(nums, k) {
//   var results = [];
//   var counts = getCounts(nums);
//   var sortedKeys = Object.keys(counts).sort((a, b) => (a + b))
  
//   var i = 0;
  
//   while (true) {
    
//     for (var j = 0; j < counts[sortedKeys[i]].length; j++) {
//       results.push(counts[sortedKeys[i]][j]);
      
//       if (results.length === k) {
//         return results;
//       }
//     }
    
//     i += 1;
//   }
// }

// function getCounts(arr) {
//   var hash = {};
//   var currentCount = 1;
  
//   arr.forEach((val, i) => {
//     if (val !== arr[i + 1]) {
//       if (hash[currentCount]) {
//         hash[currentCount].push(val);
//       } else {
//         hash[currentCount] = [val];
//       }
//       currentCount = 0;
//     }
//     currentCount += 1;
//   });
  
//   return hash;
// }


// SOLUTION 3

// function topKFrequent(nums, k) {
//   var counts = createHash(nums);
//   var results = [];
  
//   while (results.length < k) {
//     var max = 0;
//     var num;
  
//     for (var key in counts) {
//       if (counts[key] > max) {
//         max = counts[key];
//         num = key;
//       }
//     }
  
//     results.push(num);
//     delete counts[num];  
//   }
  
//   return results;
// }

// function createHash(nums) {
//   var hash = {};
  
//   for (var num of nums) {
    
//     if (hash[num] === undefined) {
//       hash[num] = 1;
//     } else {
//       hash[num] += 1;
//     }
//   }
  
//   return hash;
// }
