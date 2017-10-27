// 6
// 1 4 3 5 6 2

// 1 4 3 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 2 3 4 5 6 
function processData(input) {
  let arr = input.split('\n')[1].split(' ').map((v) => Number(v));
  
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--
    }
  }
  return arr;
} 

// console.log(processData('5\n4 2 1'));
// 2 4 1
// 1 2 4

console.log(processData('5\n1 4 3 5 6 2'));
// 1 4 3 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 2 3 4 5 6 


