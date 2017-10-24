function bonAppetit(n, k, b, ar) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i !== k) sum += ar[i]; 
  }
  return sum === b * 2 ? 'Bon Appetit' : ar[k] / 2;
}

var n = 4;
var k = 1;
var ar = [3, 10, 2, 9];
var b = 12;
console.log(bonAppetit(n, k, b, ar));  // 5

var n = 4;
var k = 1;
var ar = [3, 10, 2, 9];
var b = 7;
console.log(bonAppetit(n, k, b, ar));  // Bon Appeiti
