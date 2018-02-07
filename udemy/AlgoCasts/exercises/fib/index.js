// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n < 2) return n;               // 10ms
  let start = 0;
  let end = 1;
  while(n-- > 1) {
    let temp = start + end;
    start = end;
    end = temp;
  }
  return end;
  
}

let start = new Date().getTime();
console.log(fib(5000)); 
let end = new Date().getTime();
console.log(end - start); 

module.exports = fib;

// function fib(n, memo={}) {
//   if (n < 2) return n;            // 10ms / stack overflow
//   if (memo[n]) return memo[n];
//   return memo[n] = fib(n-1, memo) + fib(n-2, memo);
// }

// function fib(n) {                              // stack overflow
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   if (n < 2) return n;
//   let start = 0;
//   let end = 1;
//   while(n-- > 1) {
//     let temp = start + end;
//     start = end;
//     end = temp;
//   }
//   return end;
// }
