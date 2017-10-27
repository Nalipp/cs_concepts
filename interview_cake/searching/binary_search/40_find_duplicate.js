// let findDuplicate = (arr, n) => {
//   let length = n + 1;

//   let sorted = arr.sort((a, b) => a - b);

//   for (let i = 0; i < length; i++) {
      
//   }

//   // throw new Error('no duplicate!');
//   return sorted;
// }

// console.log(findDuplicate([2, 5, 3, 3, 5, 5, 6], 6));
// [ 2, 3, 3, 5, 5, 5, 6 ]
// console.log(findDuplicate([1, 5, 2, 4, 6, 3, 0], 6));  // false
  function findRepeat(theArray) {

    var floor = 1;                                                    // 3
    var ceiling = theArray.length - 1;                                // 3

    while (floor < ceiling) {                                         // 3 < 3
        var midpoint = Math.floor(floor + ((ceiling - floor) / 2));   // 3
        var lowerRangeFloor   = floor;                                // 3
        var lowerRangeCeiling = midpoint;                             // 3
        var upperRangeFloor   = midpoint + 1;                         // 4
        var upperRangeCeiling = ceiling;                              // 4

        var distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;  // 1

        var itemsInLowerRange = 0;
        theArray.forEach(function(item) {
            if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {   // (3)..(3)
                itemsInLowerRange += 1;                                   // 2
            }
        });

        if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {   // 2 > 1
            floor   = lowerRangeFloor;                                    // 3 
            ceiling = lowerRangeCeiling;                                  // 3 
        } else {
            floor   = upperRangeFloor;                                    //  
            ceiling = upperRangeCeiling;                                  //  
        }
    }

    return floor;
}
// console.log(findRepeat([2, 5, 3, 3, 5, 5, 5, 7])); // 5
// 1..7 8
// console.log(findRepeat([1, 1, 2, 3, 4, 5, 6, 7]));    // 1
console.log(findRepeat([1, 2, 3, 3, 4, 5, 6, 7]));    // 3
// console.log(findRepeat([1, 2, 3, 4, 5, 6, 7, 6]));    // 6
// console.log(findRepeat([4, 3, 3, 2, 2, 2, 2, 2]));    // 3
