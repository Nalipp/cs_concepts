var isValid = function(s) {
  let stack = [];
  let hash = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) stack.push(s[i]);
    else {
      if (hash[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      }
      else return false;
    }
  }
  return !stack.length;
};

console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("(){"));
// console.log(isValid("([])"));
