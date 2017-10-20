function binarySearch(target, nums) {
    var floorIndex = -1;
    var ceilingIndex = nums.length;

    while (floorIndex + 1 < ceilingIndex) {
      console.log('floorIndex', floorIndex);
      console.log('ceilingIndex', ceilingIndex);

        var distance = ceilingIndex - floorIndex;
        var halfDistance = Math.floor(distance / 2);
        var guessIndex = floorIndex + halfDistance;

        var guessValue = nums[guessIndex];

        if (guessValue === target) return guessIndex;

        if (guessValue > target) ceilingIndex = guessIndex;
        else floorIndex = guessIndex;                                    
    }

    return -1;
}

console.log(binarySearch(3, [1, 3, 5, 6, 9, 10]));
