var isValid = function(s) {
  let hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  let visitedMap = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
        if (visitedMap[s[i]]) return false;
        else visitedMap[hash[s[i]]] = true;
    } else {
      if (visitedMap[s[i]]) delete visitedMap[s[i]];
      else return false;
    }
  }
  return !Object.keys(visitedMap).length;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("(){"));
console.log(isValid("([])"));
