// Given a pattern and a string, find if the string follows the same pattern.
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.



// **************************************************
// Your code
// **************************************************


function wordPattern(pattern, str) {
  // code here
}

console.log(wordPattern("abba","dog cat cat dog")); // true.
console.log(wordPattern("abba","dog cat cat fish")); // false.
console.log(wordPattern("aaaa","dog cat cat dog")); // false.
console.log(wordPattern("abba","dog dog dog dog")); // false.













//**************************************************
// Solution
// **************************************************



function wordPattern(pattern, str) {
  let words = str.split(' ');
  let hash = {};
  let seen = [];

  if (pattern.length !== words.length) {
    return false;
  }

  if (pattern.length === 0) {
    return true;
  }

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (hash[char] === undefined) {
      if (seen.includes(word)) {
        return false;
      }

      hash[char] = word;
      seen.push(word);
    } else {

      if (hash[char] !== word) {
        return false;
      }
    }
  }
  return true;
};


