// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  for (let i = 1, j = n-1; i <= n; i++, j--) {      // 2200ms
    console.log('#'.repeat(i) + ' '.repeat(j)); 
  }
}

let start = new Date().getTime();
steps(5000);
let end = new Date().getTime();
console.log('total time', end - start); 

module.exports = steps;

  // if (row === n) return;                            // stack overflow

  // if (stair.length === n) {
  //   console.log(stair);
  //   steps(n, row + 1);
  // } else {
  //   stair += (stair.length <= row) ? '#' : ' ';
  //   steps(n, row, stair);
  // }

  // function row(columnCount, rowCount = 0) {
  //   if (rowCount === n) {
  //     console.log(step);
  //     step = '';
  //   } else {
  //     if (rowCount <= columnCount) step += '#';
  //     else step += ' ';
  //     row(columnCount, rowCount + 1);
  //   }
  // }
  // column(0);


  // for (let row = 0; row < n; row++) {             // 2700ms
  //   let step = '';
  //   for (let column = 0; column < n; column++) {
  //     if (column <= row) step += '#';
  //     else step += ' ';
  //   }
  //   console.log(step);
  // }

