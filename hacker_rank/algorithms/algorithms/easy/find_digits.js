var n = 12;     // 2
// var n = 1012;   // 3  

let total = 0;
let split = String(n).split('');

for (let i = 0; i < split.length; i++) {
  if (n % Number(split[i]) === 0) total += 1;
}

console.log(total);
