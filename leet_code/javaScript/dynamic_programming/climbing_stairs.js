
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

console.log(climbStairs(1)); 
console.log(climbStairs(2)); 
console.log(climbStairs(3)); 
console.log(climbStairs(4)); 
console.log(climbStairs(5)); 
console.log(climbStairs(6)); 
console.log(climbStairs(7)); 
console.log(climbStairs(8)); 
