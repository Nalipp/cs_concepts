var islandPerimeter = function(grid) {
  var isPerimeter = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        isPerimeter += checkPerimeter(grid, i - 1, j);
        isPerimeter += checkPerimeter(grid, i, j + 1);
        isPerimeter += checkPerimeter(grid, i + 1, j);
        isPerimeter += checkPerimeter(grid, i, j - 1);
      }
    }
  }
  return isPerimeter;
}

var checkPerimeter = function(grid, i, j) {
  if (grid[i] && grid[i][j] && grid[i][j] === 1) {
    return 0;
  }
  else return 1;
}

var grid = [[0,1,0,0],
            [1,1,1,0],
            [0,1,1,1],
            [1,1,0,1]];

console.log(islandPerimeter(grid));

