// Input
//   'hereiamstackerrank'
//   'hackerworld'

// Output
//   YES
//   NO


// var s = 'hereiamstackerrank';
var s = 'hackerworld';

let word = 'hackerrank'

let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === word[count]) count += 1;
}

console.log((count === word.length) ? 'YES' : 'NO');

