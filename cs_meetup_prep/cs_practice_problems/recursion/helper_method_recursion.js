function allRecursive(array, condition) {
  let copy = array.slice();

  function allRecursiveHelper(arr, condition) {
    if (arr.length === 0) return console.log(true);
    if (condition(arr[0])) {
      arr.shift()
      allRecursiveHelper(arr, condition);
    } else {
      return console.log(false); 
    }
  }

  allRecursiveHelper(copy, condition);
}


let greaterThan0 = function(v) { return v > 0 };
let greaterThan3 = function(v) { return v > 3 };
let greaterThan5 = function(v) { return v > 5 };

allRecursive([1,2,3,4,5], greaterThan0);
allRecursive([4,5], greaterThan3);
allRecursive([1,2,3,4,5], greaterThan5);


// pure recursion version

// function allRecursive(array, condition) {
//     var copy = copy || array.slice();
//     if (copy.length === 0) return console.log(true);
//     if (condition(copy[0])){
//         copy.shift();
//         return allRecursive(copy,condition);
//     } else {
//         return console.log(false);
//     }
// }


