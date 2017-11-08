// let input = '20 23 6'
let input = '49860 205494 155635764'
let split = input.split(' ');

let divisor = split[split.length -1];
let range = split.slice(0, -1);

let count = 0;
for (let i = Number(range[0]); i <= Number(range[range.length -1]; i++) {
  let reversed = String(i).split('').reverse();
  let subtracted = Number(i) - Number(reversed.join(''));
  let result = Math.abs(subtracted / divisor);
  if (result === parseInt(result)) count += 1;
}

console.log(count); 

