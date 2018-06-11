var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  let low = prices[0];
  let max = 0;
  for (let v of prices) {
    low = Math.min(low, v);
    max = Math.max(max, v - low);
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // 0
