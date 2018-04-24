// Given two strings str1 and str2, write a function to determine if str2 is an anagram of str1.
// You may assume the string contains only lowercase alphabets.

var isAnagram = function(str1, str2) {
  let hash = {};

  for (let i = 0; i < str1.length; i++) {
    let lookup1 = str1[i];

    if (!hash[lookup1]) {
      hash[lookup1] = 1;
    } else {
      hash[lookup1] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let lookup2 = str2[i]; 

    if (!hash[lookup2]) {
      return false;
    }

    if (hash[lookup2] === 1) {
      delete hash[lookup2];
    } else {
      hash[lookup2] -= 1;
    }
  }

  if (Object.keys(hash).length > 0) {
    return false;
  }

  return true;
};

console.log(isAnagram("anagram","nagaram")); // true.
console.log(isAnagram("rat","car")); // false.
