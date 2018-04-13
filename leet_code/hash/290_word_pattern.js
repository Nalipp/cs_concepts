var wordPattern = function(pattern, str) {
  let strArr = str.split(' ');
  if (pattern.length !== strArr.length) return false;
  if (pattern.length === 0) return true;
  let hash = {};
  let seen = [];
  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]]) {
      if (seen.includes(strArr[i])) return false;
      seen.push(strArr[i]);
      hash[pattern[i]] = strArr[i];
    } else {
      if (hash[pattern[i]] !== strArr[i]) return false;
    }
  }
  return true;
};

console.log(wordPattern("abba","dog cat cat dog")); // true.
console.log(wordPattern("abba","dog cat cat fish")); // false.
console.log(wordPattern("aaaa","dog cat cat dog")); // false.
console.log(wordPattern("abba","dog dog dog dog")); // false.
