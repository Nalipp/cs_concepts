var isIsomorphic = function(s, t) {
  if (s.length === 0) return true;
  let hash = {};
  let seen = [];
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
        if (seen.includes(t[i])) return false;
        seen.push(t[i]);
        hash[s[i]] = t[i];
    }
    else {
      if (hash[s[i]] !== t[i]) return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add")); //true.
console.log(isIsomorphic("foo", "bar")); //false.
console.log(isIsomorphic("paper", "title")); //true.
console.log(isIsomorphic("ab", "aa")); //false
