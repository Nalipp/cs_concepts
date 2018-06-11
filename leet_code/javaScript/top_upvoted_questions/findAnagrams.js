var findAnagrams = function(str, subStr) {
  let results = [];
  for (let i = 0; i <= str.length - subStr.length; i++) {
    let subSection = str.slice(i, i + subStr.length); 
    if (isAnagram(subSection, subStr)) {
      results.push(i);
    }
  }
  return results;
}

function isAnagram(str1, str2) {
  let hash = {};
  for (let v of str1) {
    if (!hash[v]) hash[v] = 1;
    else hash[v] += 1;
  }
  for (let v of str2) {
    if (!hash[v]) return false;
    if (hash[v] === 1) delete hash[v];
    else hash[v] -= 1;
  }
  return !Object.keys(hash).length;
}

// console.log(findAnagrams('acbehtbcbac', 'abc'));
// console.log(findAnagrams('cbaebabacd', 'abc'));
// console.log(findAnagrams('abab', 'ab'));

// s: "cbaebabacd" p: "abc" => [0, 6]
// s: "abab" p: "ab" => [0, 1, 2]
