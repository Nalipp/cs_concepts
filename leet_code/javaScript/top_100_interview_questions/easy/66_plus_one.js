// [1, 2, 3, 4] represents integer 1234, 
// add one to 1234(the length of array not changed), you get 1235. 
// but [9, 9, 9, 9] represents 9999, add one to 9999, you get 10000(the length of array changed)

var plusOne = (digits) => {
  let lastDigit = digits[digits.length -1];
  if (lastDigit !== 9) {
    digits[digits.length -1] = lastDigit + 1;
    return digits;
  }

  let ninesCount = 1;

  while (digits[digits.length - ninesCount] === 9) {
    digits[digits.length - ninesCount] = 0;
    if (ninesCount === digits.length) {
      digits.unshift(1)
      return digits;
    }
    ninesCount += 1;
  }

  digits[digits.length - ninesCount] += 1

  return digits;
}

console.log(plusOne([1, 2, 3, 4]));                                     // 1235
console.log(plusOne([9]));                                              // 10
console.log(plusOne([1, 9, 9]));                                        // 200
console.log(plusOne([9, 9]));                                           // 100
console.log(plusOne([1, 4, 9, 9]));                                     // 1500
console.log(plusOne([1, 2, 2, 9]));                                     // 1230
console.log(plusOne([1, 4, 9, 9, 9]));                                  // 15000
console.log(plusOne([]));                                               // 1
console.log(plusOne([0]));                                              // [1]
console.log(plusOne([9]));                                              // [1, 0]
console.log(plusOne([1, 4, 8, 8]));                                     // [1, 4, 8, 9]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));          // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
