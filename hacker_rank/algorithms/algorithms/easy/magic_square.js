let s = [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ];

obj = {};
let list = [0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0, j = s.length -1; i < s.length; i++, j--) {
  if (i === 0) list[0] = s[i].reduce((t, v) => t + v);
  if (i === 1) list[1] = s[i].reduce((t, v) => t + v);
  if (i === 2) list[2] = s[i].reduce((t, v) => t + v);
  list[3] += s[i][0];
  list[4] += s[i][1];
  list[5] += s[i][2];
  list[6] += s[i][i];
  list[7] += s[i][j];
}

for (let i = 0; i < list.length; i++) {
  if (obj[list[i]]) obj[list[i]] += 1;
  else obj[list[i]] = 1;
}

let keys = Object.keys(obj);
let maxKey = keys[0];

keys.forEach((v) => {
  if (obj[v] > obj[maxKey]) maxKey = v;
});

let totalDif = 0;
keys.forEach((v) => {
  if (v !== maxKey) {
    totalDif += Math.abs(maxKey - v) * obj[v]; 
  }
});

console.log(totalDif);

// console.log(obj); 
// console.log(maxKey); 

// calculate sets

// j[1] + j[2] + j[3];
// j[4] + j[5] + j[6];
// j[7] + j[8] + j[9];

// j[1] + j[4] + j[7];
// j[2] + j[5] + j[8];
// j[3] + j[6] + j[9];

// j[1] + j[5] + j[9];
// j[3] + j[5] + j[7];

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
