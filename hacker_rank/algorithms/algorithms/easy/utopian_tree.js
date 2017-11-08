// input
// 0
// 1
// output
// 1
// 2

// input
// 4
// 3
// output
// 7
// 6

// var n = 0; // 1
// var n = 1; // 2
// var n = 2; // 3    ->  (1 * 2) (2 + 1)
// var n = 3; // 6    ->  (1 * 2) (2 + 1) (3 * 2)
// var n = 4; // 7    ->  (1 * 2) (2 + 1) (3 * 2) (6 + 1) 
// var n = 5; // 14   ->  (1 * 2) (2 + 1) (3 * 2) (6 + 1) (7 * 2)


let findTreeGrowth = (cycles) => {                    // 2
  let total = 1;
  for (let i = 0; i < cycles; i++) {
    if (i % 2 === 1) total += 1; 
    else total *= 2;
  }
  return total
}

console.log(findTreeGrowth(0)); 
console.log(findTreeGrowth(1)); 
console.log(findTreeGrowth(2));
console.log(findTreeGrowth(3));
console.log(findTreeGrowth(4));
console.log(findTreeGrowth(5));
console.log(findTreeGrowth(6));
console.log(findTreeGrowth(7));
console.log(findTreeGrowth(8));
console.log(findTreeGrowth(9));
console.log(findTreeGrowth(10));




