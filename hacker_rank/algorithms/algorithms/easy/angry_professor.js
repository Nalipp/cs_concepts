var k = 3;
var a = [ -1, -3, 4, 2 ]; // YES
// var k = 2;
// var a = [ 0, -1, 2, 1 ]; // NO

let count = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] <= 0) count += 1;
}

console.log((count >= k) ? 'NO' : 'YES');
