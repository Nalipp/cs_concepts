
function maxPath(matrix) {
  function inner(i, j) {
    if (i >= matrix[0].length || j >= matrix.length) {
      return 0;
    }

    var first = matrix[i][j] + inner(i + 1, j);
    var second = matrix[i][j] + inner(i, j + 1);

    return Math.max(first, second);
  }

  return inner(0, 0);
}

var matrix = [
  [3, 4, -5],
  [3, -6, 8],
  [-4, 3, 7]
]

console.log(maxPath(matrix)); // 17
