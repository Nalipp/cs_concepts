function fibonacci(n, obj={}) {
  if (n <= 1) return n;

  if (obj[n]) return obj[n];
  return obj[n] = fibonacci(n - 1, obj) + fibonacci(n - 2, obj);
}

console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(2));  // 1
console.log(fibonacci(3));  // 2 
console.log(fibonacci(4));  // 3 
console.log(fibonacci(5));  // 5 
console.log(fibonacci(6));  // 8 
console.log(fibonacci(7));  // 13 
console.log(fibonacci(8));  // 21
