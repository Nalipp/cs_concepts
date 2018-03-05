function add(i, j, matrix) {
  let maxSum = 0;
  let w = matrix[0].length;
  let h = matrix.length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if(isValid(i, j, matrix, w, h)) {
        function inner(i, j, sum = 1) {
          matrix[i][j] = 0;
          console.log(matrix[0]); 
          console.log(matrix[1]); 
          console.log(matrix[2]); 

          console.log('i', i); 
          console.log('j', j); 
          console.log('sum', sum); 
          console.log('**********'); 

          if (isValid(i, j - 1, matrix, w, h)) {
            inner(i, j - 1, sum + 1);
          }
          if (isValid(i, j + 1, matrix, w, h)) {
            inner(i, j + 1, sum + 1);
          }
          if (isValid(i - 1, j, matrix, w, h)) {
            inner(i - 1, j, sum + 1);
          }
          if (isValid(i + 1, j, matrix, w, h)) {
            inner(i + 1, j, sum + 1);
          }
          maxSum = Math.max(maxSum, sum);
        }
        inner(i, j);
      }
    }
  }
  return maxSum;
}

function isValid(i, j, matrix, w, h) {
  if(j < 0 || i < 0) return false;
  if(i >= w - 1 || j >= h - 1) return false;
  if(matrix[j][i] === 1) return true;
  return false;
}

let matrix = [
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0]
];

console.log(add(0, 0, matrix)); 

  // console.log('i:', i, 'j:', j);
  // console.log('sum', sum); 
  // console.log('----------'); 
  // if (matrix[i - 1] && matrix[i - 1][j] === 1) {
  //   matrix[i - 1][j] = 0;
  //   inner(i - 1, j, sum + 1);
  // }
  // if (matrix[i][j + 1] && matrix[i][j + 1] === 1) {
  //   matrix[i][j + 1] = 0;
  //   inner(i, j + 1, sum + 1);
  // }
  // if (matrix[i + 1] && matrix[i + 1][j] === 1) {
  //   matrix[i + 1][j] = 0;
  //   inner(i + 1, j, sum + 1);
  // }
  // if (matrix[i] && matrix[i][j - 1] === 1) {
  //   matrix[i][j - 1] = 0;
  //   inner(i, j - 1, sum + 1);
  // }
  // maxSum = Math.max(maxSum, sum);
