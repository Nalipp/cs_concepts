
let groupAnagrams = function(strs) {
  let obj = {};
  let results = [];

  for (let word of strs) {
    let sortedWord = word.split('').sort((a, b) => a > b).join('');

    if (obj[sortedWord]) {

      obj[sortedWord].push(word);
    } else {

      obj[sortedWord] = [word];      
    }
  }

  for (let key in obj) {
    results.push(obj[key]);
  }

  return results;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//=> [
//     ["ate","eat","tea"],
//     ["tan","nat"],
//     ["bat"]
//   ]
