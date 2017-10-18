
var romanToInt = function(s) {
  let numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let number = 0;
  let index = 0;
  while (index < s.length) {
    let nextTwo = s[index] + s[index + 1];
    let nextOne = s[index];
    if (numerals.includes(nextTwo)) {
      number += ints[numerals.indexOf(nextTwo)];
      index += 2;
    } else {
      number += ints[numerals.indexOf(nextOne)];
      index += 1;
    }
  }
  return number;
};

console.log(romanToInt('CCIV'));      // 204
console.log(romanToInt('MMMCMXCIX')); // 3999
console.log(romanToInt('MCCCXIX'));   // 1319
console.log(romanToInt('CDXLIV'));    // 444
console.log(romanToInt('CDLXXXIX'));  // 489
console.log(romanToInt('MCXI'));      // 1111
