function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) count += 1;
    }
  }
  return count;
}

var n = 6;
var k = 3;
var ar = [1, 3, 2, 6, 1, 2];

console.log(divisibleSumPairs(n, k, ar)); // 5

// 1 3
// 1 2
// 1 6
// 1 1
// 1 2

// 3 2
// 3 6
// 3 1
// 3 2

// 2 6
// 2 1
// 2 2

// 6 1
// 6 2

// 1 2
