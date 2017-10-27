// input
//   5
//   4 5 3 7 2
// output
//   3 2 4 5 7

function processData(input) {
  let arr = input.split('\n')[1].split(' ').map((v) => Number(v));
  let pivot = arr[0]
  let left = [];
  let equal = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    let v = arr[i];
    if (v === pivot) equal.push(v);
    else v > pivot ? right.push(v) : left.push(v);
  }
  console.log([].concat(left, equal, right).join(' '));
} 

processData('5\n4 5 3 7 2');
