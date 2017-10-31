let getMaxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = -Number.MAX_VALUE;

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}

// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];       // 6
var stockPricesYesterday = [10, 7, 5, 3, 1];        // -2

console.log(getMaxProfit(stockPricesYesterday));
