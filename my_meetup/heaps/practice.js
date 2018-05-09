// var reorganizeString = function(S) {
//   var chars = S.split(' ');

//   for (var i = 0; i < chars.length - 1; i += 1) {
//     var firstChar = chars[i];
//     var secondChar = chars[i + 1];

//     if (firstChar === secondChar) {
//       chars = findAlternate(chars, i, i + 1);
//     }

//   }

//   return chars;
// };

// var S = "aab" // => "aba";
// // var S = "aaab"; // => '';

// console.log(reorganizeString(S));

str = 'aabbbcc';

function swap(arr, idx) {
  let end = arr.length - 1;

  while (end > idx) {
    if (arr[end] !== arr[idx]) {
      let temp = arr[end];
      arr[end] = arr[idx];
      arr[idx] = temp;
      return arr;
    }

    idx--;
  }

  return -1;
}
