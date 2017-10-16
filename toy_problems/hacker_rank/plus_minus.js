let plusMinus = (num, arr) => {
  var positives = arr.filter(item => item > 0);
  var negatives = arr.filter(item => item < 0);
  var zeros = arr.filter(item => item === 0);
      
  console.log((positives.length/num).toFixed(6));
  console.log((negatives.length/num).toFixed(6));
  console.log((zeros.length/num).toFixed(6));
};

num = 6
arr = [-4, 3, -9, 0, 4, 1,];         

// 0.500000
// 0.333333
// 0.166667

plusMinus(num, arr);
