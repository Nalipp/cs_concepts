let Heap = require('./heap_class');

let randomNumGenerator = function(count) {
  let results = [];

  console.log('generating random numbers....');

  while (results.length < count) {
    let randNum = Math.floor(Math.random() * 1000000) + 1;
    results.push(randNum);
  }

  console.log('random generator complete'); 

  return results;
}

function getTopKWithSort(arr, k) {
  let results = [];
  let sorted = arr.sort((a, b) => a - b);

  for (let num of arr) {
    if (results.length < k) {
      results.push(num);
    } else {
      return results;
    }
  }

  return results;
}

function getTopKWithHeap(arr, k) {
  let results = [];
  let h1 = new Heap(arr);
  h1.heapify();

  for (let idx in arr) {
    if (results.length < k) {
      results.push(h1.takeMin());
    } else {
      return results;
    }
  }

  return results;
}




// ****************************************************************************************************
// benchmark

let firstTime = new Date().getTime();
console.log('time started at : ', firstTime); 


let numsArr = randomNumGenerator(20000000);

// console.log(getTopKWithSort(numsArr, 30));
console.log(getTopKWithHeap(numsArr, 30));


let secondTime = new Date().getTime();
console.log('time stopped at : ', secondTime); 

console.log(secondTime - firstTime);

// ****************************************************************************************************




