arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

// arr = [ [ 11, 2, 4, 5, 8 ],  
//         [ 4, 5, 6, 6, 11 ], 
//         [ 10, 8, -12, 7, 9 ], 
//         [ 1, 3, 4, 8, 1 ], 
//         [ 4, 3, 4, 9, 8 ] ];

// console.log(11 + 5 + 8 + 8)
// console.log(8 + 6 + 3 + 4);

// console.log(Math.abs((11 + 5 + 8 + 8) - (8 + 6 + 3 + 4)));

// var concatedArr = arr[0].concat(arr[1], arr[2]);

var diff = 0;

for (let i = 0, j = arr.length -1; i < arr.length; i++, j--) {
  diff += (arr[i][i] - arr[i][j]);
}

console.log(Math.abs(diff));
