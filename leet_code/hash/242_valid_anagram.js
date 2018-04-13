var isAnagram = function(s, t) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = 1;
    else hash[s[i]] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) return false;
    if (hash[t[i]] === 1) delete hash[t[i]];
    else hash[t[i]] -= 1;
  }
  if (Object.keys(hash).length > 0) return false;
  return true;
};

// console.log(isAnagram("anagram","nagaram")); // true.
console.log(isAnagram("rat","car")); // false.
