var largestRectangleArea = function(heights) {
  var maxRec = 0;

  for (var i = 0; i < heights.length; i += 1) {
    var num = heights[i];

    var curRec = num;
    var multiplier = searchBackward(heights, num, i) + searchForward(heights, num, i) + 1;
    curRec *= multiplier

    maxRec = Math.max(maxRec, curRec);
  }
    
  return maxRec;
};

function searchForward(heights, num, i) {
  var count = 0; 

  while (heights[i += 1] >= num) {
    count += 1;
  }

  return count;
}

function searchBackward(heights, num, i) {
  var count = 0; 

  while (heights[i -= 1] >= num) {
    count += 1;
  }

  return count;
}

console.log(largestRectangleArea([2,1,5,6,2,3])); // => 10

