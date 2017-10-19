// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of the grade is less than 38, no rounding occurs as the result will still be a failing grade.

// length = 4
// input    output
// 73(2)    75
// 67       67
// 38(2)    40
// 33       33

function solve(grades){
  return grades.map((i) => {
    if (i < 38) return i;
    if (i % 5 === 3) return i + 2;
    if (i % 5 === 4) return i + 1;
    return i;
  });
}

console.log(solve([73, 67, 38, 33]));
