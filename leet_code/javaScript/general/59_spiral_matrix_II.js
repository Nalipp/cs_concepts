var generateMatrix = function(n) {
  let i = 0;
  let j = -1;
  let results = [];
  while (results.length < n) results.push([]);

  for (let c = 1; c <= n * n; c++) {

    if (i - 1 >= 0 && results[i - 1][j] === undefined) {
      results[i - 1][j] = c;
      i--;
    } else if (j + 1 < n && results[i][j + 1] === undefined) {
      results[i][j + 1] = c;
      j++;
    } else if (i + 1 < n && results[i + 1][j] === undefined) {
      results[i + 1][j] = c;
      i++;
    } else {
      results[i][j - 1] = c;
      j--;
    }
  }

  return results;
};

console.log(generateMatrix(4));
