// 1, 4, 9, 16

// var n = 12 // 3 (4 + 4 + 4)
// var n = 13 // 2 (4 + 9)

function possiblePerfectSquares(num) {
  let results = [];
  let i = 1;

  while (true) {
    let product = i * i;
    results.push(product); 

    if (product >= num) break;
    i += 1;
  }

  return results;
}

var numSquares = function(n) {
    
};

console.log(numSquares(13)); // => [1, 4, 9, 16]

