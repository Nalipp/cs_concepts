// let numbers = [2, 4, 6, 8, 10, 11, 13];   // => [2, 4]
// let numbers = [2, 4, 6, 8, 10, 12, 13];   // => [1, 5]
let numbers = [2, 4, 6, 8, 8, 9, 11, 13]; // => [3, 4]
let target = 16;

let twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length -1;

  while(numbers[start] + numbers[end] !== target && start < end) {
    if (numbers[start] + numbers[end] < target) start++;
    else end--;
  }

  if (start === end) return [-1, -1];
  return [start, end];
}

console.log(twoSum(numbers, target)); 
