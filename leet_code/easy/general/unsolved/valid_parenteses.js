// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

var isValid = function(s) {
  let lefts = ['(', '[', '{'];
  let rights = [')', ']', '}'];
};

// console.log(isValid('()'));           // true
// console.log(isValid('()[]{}'));       // true
// console.log(isValid('(()[]{})'));     // true
// console.log(isValid('(()[]{})[]'));   // true
// console.log(isValid('(()[]{})[{]}')); // false
// console.log(isValid('(([)]{})'));     // false
// console.log(isValid('(]'));           // false
// console.log(isValid('[()]{}{[()()]()}'));           // true

console.log(isValid('([])'));         // true
console.log(isValid('([)]'));         // false
console.log(isValid(')[)]'));         // false

// ['(', '[', '{'].includes('')  // lefts
// [')', ']', '}'].includes('')  // rights
// let lefts = ['(', '[', '{'];
// let rights = [')', ']', '}'];


// a left and right bracket cant have open brackets between them



