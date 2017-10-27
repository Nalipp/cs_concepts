// let str = '3 3 2 1 3'; // 2
// let str = '24 29 70 43 12 27 29 24 41 12 41 43 24 70 24 100 41 43 43 100 29 70 100 43 41 27 70 70 59 41 24 24 29 43 24 27 70 24 27 70 24 70 27 24 43 27 100 41 12 70 43 70 62 12 59 29 62 41 100 43 43 59 59 70 12 27 43 43 27 27 27 24 43 43 62 43 70 29';  // 63
let str = '37 32 97 35 76 62' // 5

let split = str.split(' ');

let obj = {};
let maxKey = split[0];
let totalCount = 0;

for (let i = 0; i < split.length; i++) {
  let v = split[i];
  if (obj[v]) obj[v] += 1;
  else obj[v] = 1;
  if (obj[v] > obj[maxKey]) maxKey = v;
}

let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  if (keys[i] !== maxKey) totalCount += obj[keys[i]];
}

console.log(totalCount); 
// console.log(maxKey); 
// console.log(obj); 
