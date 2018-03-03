function sortArray(array) {
  let sorted = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      sorted.push(array[i]);
      array[i] = null;
    }
  }
  sorted.sort()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      array[i] = sorted.shift();
    }
  }
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0])
console.log(sortArray([])) // [])
