function sockMerchant(n, ar) {
  let sockCounts = {};
  let totalPairs = 0;
  
  ar.forEach((v) => {
    if (sockCounts[v]) sockCounts[v] += 1;
    else sockCounts[v] = 1;
  });

  let keys = Object.keys(sockCounts);
  keys.forEach((v) => {
    totalPairs += Math.floor(sockCounts[v] / 2);
  });

  console.log(totalPairs);
}

var n = 9
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
sockMerchant(n, ar);

