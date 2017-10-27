// Sample input
//   5 4
//   1 6 3 5 2
// Sample Output
//   2

let k = 4
let height = [1, 6, 3, 5, 2];
let drinks = 0;

height.forEach((a) => {
  while (k < a) {
    k += 1; 
    drinks += 1;
  }
});

console.log(drinks);
