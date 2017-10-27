function solve(n, s, d, m){
  let count = 0;
  for (let i = 0; i <= n - m; i++) {
    let arr = s.slice(i, i + m);
    let currentSum = arr.reduce((a, b) => a + b);
    if (currentSum === d) count += 1;
  }
  return count;
}

var n =  5;
var s = [ 1, 2, 1, 3, 2 ];
var d = 3;
var m = 2;
console.log(solve(n, s, d, m)); // 2

// var n = 6;
// var s = [1, 1, 1, 1, 1, 1];
// var d = 3; 
// var m = 2;
// console.log(solve(n, s, d, m)); // 0

// var n = 1;
// var s = [4];
// var d = 4; 
// var m = 1;
// console.log(solve(n, s, d, m)); // 1

// var n = 55;
// var s = [3, 5, 4, 1, 2, 5, 3, 4, 3, 2, 1, 1, 2, 4, 2, 3, 4, 5, 3, 1, 2, 5, 4, 5, 4, 1, 1, 5, 3, 1, 4, 5, 2, 3, 2, 5, 2, 5, 2, 2, 1, 5, 3, 2, 5, 1, 2, 4, 3, 1, 5, 1, 3, 3, 5];
// var d = 18;
// var m = 6;
// console.log(solve(n, s, d, m)); // 10;



