var solve = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      function inner(i, j) {
        if (board[i - 1] && board[i + 1] && board[i][j + 1] && board[i][j - 1]) {
          if (board[i - 1][j] !== 'O' && board[i, j + 1] !== 'O' && board[i + 1, j] !== 'O' && board[i, j - 1] !== 'O') {
            board[i][j] = 'X';
          }
        }
      }
      if (board[i][j] === 'O') {
        inner(i, j);
      }
    }
  }
  return board;
};

var b1 = [[ 'X', 'X', 'X', 'X' ],
          [ 'X', 'O', 'O', 'X' ],
          [ 'X', 'X', 'O', 'X' ],
          [ 'X', 'O', 'X', 'X' ]];


input = [["O","X","X","O","X"],
          ["X","O","O","X","O"],
          ["X","O","X","O","X"],
          ["O","X","O","O","O"],
          ["X","X","O","X","O"]]

// yours => [["O","X","X","O","X"],
//           ["X","X","X","X","O"],
//           ["X","X","X","X","X"],
//           ["O","X","X","X","O"],
//           ["X","X","O","X","O"]]

// expec => [["O","X","X","O","X"],
//           ["X","X","X","X","O"],
//           ["X","X","X","O","X"],
//           ["O","X","O","O","O"],
//           ["X","X","O","X","O"]]

console.log(solve(input));

