// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let cleanedA = stringA.replace(/[^A-Za-z]/g, '').toLowerCase();  // 140ms
  let cleanedB = stringB.replace(/[^A-Za-z]/g, '').toLowerCase();
  let hashA = {};
  let hashB = {};

  if (cleanedA.length !== cleanedB.length) return false;

  for (let char of cleanedA) hashA[char] = hashA[char] + 1 || 1;
  for (let char of cleanedB) hashB[char] = hashB[char] + 1 || 1;

  for (let key in hashA) if (hashA[key] !== hashB[key]) return false;
  return true;
}

let start = new Date().getTime();

console.log(anagrams('ab'.repeat(500000), 'ba'.repeat(500000)));

let end = new Date().getTime();

console.log('total time', end - start); 

module.exports = anagrams;

  // let cleanedA = stringA.replace(/[^A-Za-z]/g, '').toLowerCase(); // 554ms
  // let cleanedB = stringB.replace(/[^A-Za-z]/g, '').toLowerCase();

  // let sortedA = cleanedA.split('').sort().join('');
  // let sortedB = cleanedB.split('').sort().join('');

  // return sortedA === sortedB;

// interesting that the second approach is so much slower than the first. This is because sort() uses O(n log n) while the three iterations are still only log n(O)
