// 0 1 1 2 3 5 8 13 -> 7th position

function fib(n) {
  let b1 = 1;
  let b2 = 0;
  let sum;

  for (let i = 2; i <= n; i++) {
    sum = b1 + b2;
    b2 = b1;
    b1 = sum;
  }
  return sum;
}

console.log(fib(7));

// function fib(n) {
//   if (n < 2) return n;
//   return fib(n-1) + fib(n-2);
// }

// function fib(n, arr=[]) {
//   if (n < 2) return n;
//   if (arr[n]) return arr[n];
//   return arr[n] = fib(n -1, arr) + fib(n -2, arr);
// }

// console.log(fib(7));


