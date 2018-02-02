// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

let start = new Date().getTime();                

function palindrome(str) {                        // 47m
  for ( let i = 0, j = str.length - 1; 
        i < Math.ceil(str.length / 2); 
        i++, j--
      ) {
        if (str[i] !== str[j]) return false;
      }
  return true
}

console.log(palindrome('moommoom'.repeat(500000)))

let end = new Date().getTime();
console.log('total time', end - start);

module.exports = palindrome;

// function palindrome(str) {                     // 773m
//   return str.split('').reduce((r, c) => c + r, '') === str;
// }

// function palindrome(str) {                     // 782m
//   let result = '';
//   for (let char of str) {
//     result = char + result;
//   }
//   return result === str;
// }

// function palindrome(str) {                     // 213m 
//   return str.split('').every((char, i) => {     
//     return char === str[str.length - i - 1];
//   });
// }

// function palindrome(str) {                     // 450m
//   for ( let i = 0, j = str.length - 1; 
//         i < Math.ceil(str.length / 2); 
//         i++, j--
//       ) {
//         if (str[i] !== str[j]) return false;
//       }
//   return true
