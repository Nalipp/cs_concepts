// input
//   amount = 4
//   denominations [1,2,3];
// output
//   4

//   amount = 4
//   denominations [1,2,3]; // 4
//   1, 1, 1, 1
//   1, 1, 2
//   2, 2
//   1, 3

//   amount = 5
//   denominations [1,2,3]; // 5
//   1, 1, 1, 1, 1
//   1, 1, 1, 2
//   1, 2, 2
//   1, 1, 3
//   3, 2

//   T A
//   1 1 -> | 1 |
//   2 2 -> | 1 | 2 |
//   3 3 => | 1 1 1 | 1 2 | 3 |
//   4 4 -> | 1 1 1 1 | 1 1 2 | 2 2 | 1 3 |
//   5 5 -> | 1 1 1 1 1 | 1 1 1 2 | 1 2 2 | 1 1 3 | 2 3

//   amount = 6
//   denominations [1,2,3]; // 7
//   1, 1, 1, 1, 1, 1
//   1, 1, 1, 1, 2
//   1, 1, 2, 2
//   2, 2, 2
//   1, 1, 1, 3
//   3, 3
//   1, 2, 3

//   amount = 7
//   denominations [1,2,3]; // 8
//   1, 1, 1, 1, 1, 1, 1
//   1, 1, 1, 1, 1, 2
//   1, 1, 1, 2, 2
//   1, 2, 2, 2
//   1, 1, 1, 1, 3
//   1, 3, 3
//   1, 1, 2, 3
//   2, 2, 3
//
//   amount = 8
//   denominations [1,2,3]; // 9
//   1, 1, 1, 1, 1, 1, 1, 1
//   1, 1, 1, 1, 1, 1, 2
//   1, 1, 1, 1, 2, 2
//   1, 1, 2, 2, 2
//   2, 2, 2, 2
//   1, 1, 1, 1, 1, 3
//   1, 1, 3, 3
//   1, 1, 1, 2, 3
//   1, 2, 2, 3
//
//   amount = 9
//   denominations [1,2,3]; // 11
//   1, 1, 1, 1, 1, 1, 1, 1, 1
//   1, 1, 1, 1, 1, 1, 1, 2
//   1, 1, 1, 1, 1, 2, 2
//   1, 1, 1, 2, 2, 2
//   1, 2, 2, 2, 2
//   1, 1, 1, 1, 1, 1, 3
//   1, 1, 1, 3, 3
//   3, 3, 3
//   1, 1, 1, 2, 3
//   3, 2, 3
//   1, 2, 2, 3
//                         // 12
//                         // 13
//                         // 14
//                         // 16

  function changePossibilitiesTopDown(amountLeft, denominations, currentIndex, obj={}) {
    currentIndex = (typeof currentIndex !== 'undefined') ? currentIndex : 0;

    if (amountLeft === 0) return 1;
    if (amountLeft < 0) return 0;
    if (currentIndex === denominations.length) return 0;

    console.log('checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

    var currentCoin = denominations[currentIndex];

    var numPossibilities = 0;
    while (amountLeft >= 0) {
      let key = [amountLeft, currentIndex].join(', ');
      if (obj[key]) numPossibilities += obj[key];
      else {
        obj[key] = changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1, obj);
        numPossibilities += obj[key];
      }
        amountLeft -= currentCoin;
    }

    return numPossibilities;
}

// console.log(changePossibilitiesTopDown(4, [1, 2, 3], 0));  // 4
console.log(changePossibilitiesTopDown(5, [1, 2, 3], 0));  // 5
// console.log(changePossibilitiesTopDown(6, [1, 2, 3], 0));  // 7
// console.log(changePossibilitiesTopDown(7, [1, 2, 3], 0));  // 8
// console.log(changePossibilitiesTopDown(8, [1, 2, 3], 0));  // 10
// console.log(changePossibilitiesTopDown(9, [1, 2, 3], 0));  // 12
// console.log(changePossibilitiesTopDown(10, [1, 2, 3], 0)); // 14
// console.log(changePossibilitiesTopDown(11, [1, 2, 3], 0)); // 16
// console.log(changePossibilitiesTopDown(12, [1, 2, 3], 0)); // 19
// console.log(changePossibilitiesTopDown(13, [1, 2, 3], 0)); // 21
