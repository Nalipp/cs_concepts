let fibonacci = (n, memo={}) => {
  if (n < 2) return 1;
  if (memo[n]) return memo[n];
  return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}

// console.log(fibonacci(0)); // => 1;
// console.log(fibonacci(1)); // => 1;
// console.log(fibonacci(2)); // => 2;
// console.log(fibonacci(3)); // => 3;
// console.log(fibonacci(4)); // => 5;
// console.log(fibonacci(5)); // => 8;
// console.log(fibonacci(6)); // => 13;
// console.log(fibonacci(7)); // => 21;
// console.log(fibonacci(8)); // => 34;
// console.log(fibonacci(9)); // => 55;
// console.log(fibonacci(10)); // => 89;
console.log(fibonacci(11)); // => 144;
