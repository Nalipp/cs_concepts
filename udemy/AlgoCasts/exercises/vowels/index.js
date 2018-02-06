// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let matches = str.match(/[aeiou]/gi);             // 600ms
  return matches ? matches.length : 0;
}

let start = new Date().getTime();
console.log(vowels('How mAny vowels are there?'.repeat(500000)));
let end = new Date().getTime();
console.log('total time', end - start); 

module.exports = vowels;

  // let vowels = 'aeiou';                          // 600ms
  // let count = 0;
  
  // for (let char of str.toLowerCase()) {
  //   if (vowels.includes(char)) count += 1;
  // }

  // return count;

