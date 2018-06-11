var maxAreaOfIsland = function(grid) {
  var maxSize = 0;
  var currentCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      function inner(i, j) {
        if (!grid[i] || !grid[i][j] || grid[i][j] === 0) return;
        grid[i][j] = 0;
        currentCount += 1;
        inner(i - 1, j);
        inner(i, j + 1);
        inner(i + 1, j);
        inner(i, j - 1);
      }
      if (grid[i][j] === 1) {
        inner(i, j);
        maxSize = Math.max(maxSize, currentCount);
        currentCount = 0;
      }
    }
  }
  return maxSize;
};

var i1 = [[0, 1, 0, 0, 0],
          [1, 1, 1, 0, 1],
          [1, 0, 0, 1, 1],
          [0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1]]

var i2 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,1,1,1,0,0,0],
          [0,1,1,0,1,0,0,0,0,0,0,0,0],
          [0,1,0,0,1,1,0,0,1,0,1,0,0],
          [0,1,0,0,1,1,0,0,1,1,1,0,0],
          [0,0,0,0,0,0,0,0,0,0,1,0,0],
          [0,0,0,0,0,0,0,1,1,1,0,0,0],
          [0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(i2));
