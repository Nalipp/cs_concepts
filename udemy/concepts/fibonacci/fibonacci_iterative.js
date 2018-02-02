let fibonacci = (n) => {
  if (n === 0 || n === 1) return 1;
  let sum1 = 1;
  let sum2 = 1;
  for (let i = 2; i < n; i++) {
    let temp = sum1 + sum2;
    sum1 = sum2;
    sum2 = temp;
  }
  return sum1 + sum2;
}

console.log(fibonacci(0)); // => 1;
console.log(fibonacci(1)); // => 1;
console.log(fibonacci(2)); // => 2;
console.log(fibonacci(3)); // => 3;
console.log(fibonacci(4)); // => 5;
console.log(fibonacci(5)); // => 8;
