// let fib = (n) => {
//   if (n <= 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(7));


var climbStairs = function(n) {
  if (n <= 2) return n;

  back1Pos = 2;
  back2Pos = 1;

  for (let i = 2; i < n; i++) {
    temp = back1Pos;
    back1Pos = back2Pos + back1Pos;
    back2Pos = temp;
  }
  return back1Pos;
};

console.log(climbStairs(0)); // 0
console.log(climbStairs(1)); // 1 
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
console.log(climbStairs(7)); // 21
console.log(climbStairs(8)); // 34
console.log(climbStairs(9)); // 55

// 111111111
// 2
// 22
// 222
// 2222
// 9 => 5

// 11111111
// 2
// 22
// 222
// 2222
// 8 => 5

// 111111
// 21111
// 12111
// 11211
// 11121
// 11112

// 22111
// 12211
// 11221
// 11122

// 21211
// 12121
// 11212

// 21121
// 12112

// 1222
// 2122
// 2212
// 2221
// 7 => 19

// 111111
// 21111
// 12111
// 11211
// 11121
// 11112
// 2211
// 1221
// 1122
// 2121
// 1212
// 222
// 6 => 12

// 11111
// 2111
// 1211
// 1121
// 1112
// 122
// 212
// 221
// 5 => 8

// 1111
// 211
// 121
// 112
// 22
// 4 => 5

// 111
// 21
// 12
// 3 => 4

// 11
// 2
// 2 => 2

// 1
// 1 => 1


