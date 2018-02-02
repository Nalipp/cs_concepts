let fibonacci = (n) => {
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(0)); // => 1;
// console.log(fibonacci(1)); // => 1;
// console.log(fibonacci(2)); // => 2;
// console.log(fibonacci(3)); // => 3;
// console.log(fibonacci(4)); // => 5;
// console.log(fibonacci(5)); // => 8;
console.log(fibonacci(6)); // => 13;
