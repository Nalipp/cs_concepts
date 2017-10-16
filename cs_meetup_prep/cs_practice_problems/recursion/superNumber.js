// Sample Input 0

// 148 3
// Sample Output 0

// 3
// Explanation 0

// Here  and , so .

// super_digit(P) = super_digit(148148148) 
//                = super_digit(1+4+8+1+4+8+1+4+8)
//                = super_digit(39)
//                = super_digit(3+9)
//                = super_digit(12)
//                = super_digit(1+2)
//                = super_digit(3)
//                = 3.


// superDigit I

// let superDigit = (num) => {
//   if (String(num).length === 1) return num;

//   let sum = String(num).split('').reduce( (a, b) => {
//     return Number(a) + Number(b);
//   });

//   return superDigit(sum);
// }

// console.log(superDigit(148));


// superDigit II

// let superDigit = (num, multiplier) => {
//   let multiplied = String(num).repeat(multiplier);
  
//   let innerSuperDigit = (num) => {
//     let sum = String(num).split('').reduce((a, b) => {
//       return Number(a) + Number(b);
//     });

//     if (sum < 10) return sum;
//     return innerSuperDigit(sum);
//   }

//   return innerSuperDigit(multiplied);
// }

// console.log(superDigit(12, 4));

let superDigit = (num, multiplier) => {
  let multiplied = String(num).repeat(multiplier);

  if (String(multiplied).length === 1) return multiplied;

  let sum = String(multiplied).split('').reduce( (a, b) => {
    return Number(a) + Number(b);
  });

  return superDigit(sum, 1);
}

console.log(superDigit(99, 2));
