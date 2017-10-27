// must know the max range (min can default as 0)
let countingSort = (arr, max, min=0) => {
  let numCounts = [];
  let sorted = [];
  for (let i = min; i <= max; i++) {
    numCounts[i] = 0;
  }

  arr.forEach((v) => {
    numCounts[v] += 1;    
  });

  numCounts.forEach((v, i) => {
    for (let j = 0; j < v; j++) sorted.push(i);
  });

  return sorted;
}

console.log(countingSort([2, 5, 9, 10, 4, 3, 6, 7, 8, 6, 5, 6, 4, 4, 5, 3], 10));  

