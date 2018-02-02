// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  for ( let i = 0, j = str.length - 1; 
        i < Math.ceil(str.length / 2); 
        i++, j--
      ) {
        if (str[i] !== str[j]) return false;
      }
  return true
}

module.exports = palindrome;

// function palindrome(str) {
//   return str.split('').reduce((r, c) => c + r, '') === str;
// }

// function palindrome(str) {
//   let result = '';
//   for (let char of str) {
//     result = char + result;
//   }
//   return result === str;
// }
