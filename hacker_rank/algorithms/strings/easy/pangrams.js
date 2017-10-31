// Input #1

// We promptly judged antique ivory buckles for the next prize    
// Input #2

// We promptly judged antique ivory buckles for the prize    
// Sample Output

// Output #1

// pangram
// Output #2

// not pangram

// var input = 'We promptly judged antique ivory buckles for the next prize'; // panagram
var input = 'We promptly judged antique ivory buckles for the prize';      // not panagram

let set = new Set();
var cp = input.replace(/ /g, '').toLowerCase();

for (let i = 0; i < cp.length; i++) {
  set.add(cp[i]);
}

console.log((set.size === 26) ? 'pangram' : 'not pangram' );
