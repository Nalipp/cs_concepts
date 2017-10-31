

let arr = [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ];

let j = [].concat(arr[0], arr[1], arr[2]);
let obj = {};
let concatedArr = [];

// concat arr
arr.forEach((v) => {
  for (let i = 0; i < v.length; i++) concatedArr.push(v[i]);
})

// calculate row sets
arr.forEach((v) => {
  let sum = v.reduce((s, v) => s + v);
  if (obj[sum]) obj[sum] += 1;
  else obj[sum] = 1;
});
  
// calculate colum sets

let (i = 0; i < concatedArr.length; i++) {
  let (j = 0; j < arr[0].length * arr.length; j += 3
}
  for (let

});


// calculate diagnal sets

j[1] + j[2] + j[3];
j[4] + j[5] + j[6];
j[7] + j[8] + j[9];

j[1] + j[4] + j[7];
j[2] + j[5] + j[8];
j[3] + j[6] + j[9];

j[1] + j[5] + j[9];
j[3] + j[5] + j[7];

// 492
// 357
// 815

// ---
// 123
// 456
// 789

// 147
// 258
// 369

// 159
// 357
