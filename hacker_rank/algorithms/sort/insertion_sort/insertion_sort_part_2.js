// 6
// 1 4 3 5 6 2

// 1 4 3 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 2 3 4 5 6 
// function processData(input) {
//   let split = input.split('\n');
//   let arr = split[1].split(' ').map((a) => Number(a));

//   for (let i = 0; i < arr.length -1; i++) {         
//     let pointer = i + 1                         
//     let value = arr[i];                        
//     let j = i;

//     while (arr[pointer] < value) {            
//       let temp = value;                      
//       arr[j] = arr[pointer];                
//       arr[pointer] = temp;                 
//       pointer -= 1;
//       value = arr[j -= 1];
//     }

//     console.log(arr.join(' '));                     
//   }
// } 

// console.log(processData('5\n4 2 1'));
// 2 4 1
// 1 2 4

// console.log(processData('5\n1 4 3 5 6 2'));
// 1 4 3 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 2 3 4 5 6 


function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

