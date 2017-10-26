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

    var floor = 1;
    var ceiling = theArray.length - 1;                                // 7

    while (floor < ceiling) {
        var midpoint = Math.floor(floor + ((ceiling - floor) / 2));   // 4
        var lowerRangeFloor   = floor;
        var lowerRangeCeiling = midpoint;
        var upperRangeFloor   = midpoint + 1;
        var upperRangeCeiling = ceiling;                              // 1..4, 5..7

        var distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;  // 2

        var itemsInLowerRange = 0;
        theArray.forEach(function(item) {
            if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {   // 1..4
                itemsInLowerRange += 1;                                   // 2 3 3 (3)
            }
        });

        if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {   // 3 > 2
            floor   = lowerRangeFloor;                                    // 1
            ceiling = lowerRangeCeiling;                                  // 4
        } else {
            floor   = upperRangeFloor;
            ceiling = upperRangeCeiling;
        }
    }

    return floor;
}
console.log(findRepeat([2, 5, 3, 3, 5, 5, 5, 7]));
