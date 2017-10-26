// Sample Input

// 5
// 2 4 6 8 3
// Sample Output

// 2 4 6 8 8 
// 2 4 6 6 8 
// 2 4 4 6 8 
// 2 3 4 6 8 

function processData(input) {
  let split = input.split('\n');
  let arr = split[1].split(' ').map((a) => Number(a));

  let temp = arr[arr.length -1];
  let pointer = arr.length -2;

  while (temp < arr[pointer]) {
    arr[pointer + 1] = arr[pointer];
    pointer -= 1;
    console.log(arr.join(' '));
  }
  arr[pointer + 1] = temp;
  console.log(arr.join(' '));
}
console.log(processData('5\n2 4 6 8 3')); // [ 2, 3, 4, 6, 8 ]
// console.log(processData('5\n2 4 6 8 9 10 11 33 8'));

