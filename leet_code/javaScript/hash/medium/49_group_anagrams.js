// group anagrams
// .sort(), obj counts


// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

var groupAnagrams = function(strs) {
  var obj = {};
  var results = [];

  for (var word of strs) {
    var sortedWord = word.split('').sort((a, b) => a > b).join('');

    if (obj[sortedWord]) {

      obj[sortedWord].push(word);
    } else {

      obj[sortedWord] = [word];      
    }
  }

  for (var key in obj) {
    results.push(obj[key]);
  }

  return results;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
