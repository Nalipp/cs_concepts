function fib(n) {
  let hash = {};

  function inner(n) {
    if (hash[n]) return hash[n];
    if (n <= 1) return n;

    hash[n - 1] = inner(n - 1)
    hash[n - 2] = inner(n - 2);
    return  hash[n - 1] + hash[n - 2]; 
  }
  return inner(n);
}

console.log(fib(12));
