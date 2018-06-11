var numIslands = function(grid) {
  var islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      function inner(i, j) {
        if (!grid[i] || !grid[i][j] || grid[i][j] === '0') return;
        grid[i][j] = '0';
        inner(i - 1, j);
        inner(i, j + 1);
        inner(i + 1, j);
        inner(i, j - 1);
      }
      if (grid[i][j] === '1') {
        inner(i, j);
        islandCount += 1;
      }
    }
  }
  return islandCount;
};

var i1 = [[1,1,1,1,0],
          [1,1,0,1,0],
          [1,1,0,0,0],
          [0,0,0,0,0]];

var i2 = [[1,1,0,0,0],
          [1,1,0,0,0],
          [0,0,1,0,0],
          [0,0,0,1,1]];

var i3 = [["1","1","1","1","0"],
          ["1","1","0","1","0"],
          ["1","1","0","0","0"],
          ["0","0","0","0","0"]];

console.log(numIslands(i3));
