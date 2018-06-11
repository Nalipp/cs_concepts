// Given a non-empty list of words, return the k most frequent elements.
// Your answer should be sorted by frequency from highest to lowest. 
// If two words have the same frequency, then the word with the lower alphabetical order comes first.

// You may assume k is always valid
// Input words contain only lowercase letters.

// follow up
//   Try to solve it in O(n log k) time and O(n) extra space.

var topKFrequent = function(words, k) {
  var objCounts = countObj(words);
  var freqCounts = countByFreq(objCounts);
  var arrCounts = Object.entries(freqCounts);
  var results = [];

  for (var i = arrCounts.length - 1; i >= 0; i--) {
    var sorted = arrCounts[i][1].sort();

    for (var word of sorted) {
      results.push(word);

      if (results.length === k) {
        return results;
      }
    }
  }
}

var countObj = function(words) {
  var obj = {};
    
  for (var i = 0; i < words.length; i++) {
    if (obj[words[i]]) {
      obj[words[i]] += 1;
    } else {
      obj[words[i]] = 1;
    }
  }
  return obj;
}

var countByFreq = function(obj) {
  var newObj = {};

  for (var key in obj) {
    var val = obj[key];

    if (newObj[val]) {
      newObj[val].push(key);
    } else {
      newObj[val] = [key];
    }
  }

  return newObj;
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// => ["i", "love"] // 'i' comes before 'love' due to a lower alphabetical order.

// console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
// => ["the", "is", "sunny", "day"]

// console.log(topKFrequent(["a", "i", "a", "love", "a", "leetcode", "i", "love", "coding"], 2));
// => ["the", "is", "sunny", "day"]


// ****************************************************************************************************
//   SOLUTIONS
// ****************************************************************************************************


// var topKFrequent = function(words, k) {
//   var obj = countObj(words);  
//   var arrCounts = Object.entries(obj);
//   var sortedCounts = arrCounts.sort((a, b) => b[1] - a[1]);
//   var results = [];
//   var temp = [];

//   for (var i = 0; i < sortedCounts.length; i++) {
//     temp.push(sortedCounts[i]);

//     if (!sortedCounts[i + 1] || sortedCounts[i][1] !== sortedCounts[i + 1][1]) {
//       var sortedTemp = temp.sort();

//       for (var current of sortedTemp) {
//         results.push(current[0]);

//         if (results.length === k) {
//           return results;
//         }
//       }

//       temp = [];
//     }
//   }

//   return results;
// };

// var countObj = function(words) {
//   var obj = {};

//   for (var word of words) {
//     if (obj[word]) {
//       obj[word] += 1;
//     } else {
//       obj[word] = 1;
//     }
//   }

//   return obj;
// }

