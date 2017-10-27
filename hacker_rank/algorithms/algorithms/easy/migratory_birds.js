function migratoryBirds(n, ar) {
  let counts = [0, 0, 0, 0, 0];
  let max = -1;
  let returnIndex;

  for (let i = 0; i < n; i++) {
    counts[ar[i] - 1] += 1;
  }

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > max) {
      max = counts[i];
      returnIndex = i;
    }
  }

  return returnIndex + 1;
}

var n = 6;
var ar = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(n, ar)); // 4
