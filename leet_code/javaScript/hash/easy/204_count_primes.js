var countPrimes = function(n) {
  var count = 0;
    
  for (var i = 2; i < n; i++) {
    if (isPrime(i)) count += 1;
  }
    
  return count;
};

var isPrime = function(num) {
  if (num < 2) return false;
    
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
       return false;
    }
  }

  return true;
}

console.log(countPrimes(5)); // => 2
