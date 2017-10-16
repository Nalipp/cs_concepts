// let findFibonacci = (n) => {
//   if (n === 0) return 0;

//   if (n <= 2) return 1;
//   return findFibonacci(n - 1) + findFibonacci(n - 2);
// }

// console.log(findFibonacci(8));

// using memonization

// let fibonacci = (n) => {
//   let hash = {};
//   if (n === 0) return 0;
//   if (n <= 2) return 1;
//   if (hash[n]) return hash[n];
//   return hash[n] = fibonacci(n - 2) + fibonacci(n - 1);
// }

// console.log(fibonacci(50));

function fib(n, savedFib) {
  savedFib = savedFib || {};
  if (n <= 0) return 0; 
  if (n <= 2) return 1; 

  if (!savedFib[n - 1]) savedFib[n - 1] = fib(n - 1, savedFib);
  if (!savedFib[n - 2]) savedFib[n - 2] = fib(n - 2, savedFib);

  return savedFib[n - 1] + savedFib[n - 2];
}
console.log(fib(50));
