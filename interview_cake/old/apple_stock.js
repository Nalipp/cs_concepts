//         i      price
// 9:30 -> 0      $
// 9:31 -> 1      $
// 9:32 -> 2      $
// 12:40 -> 190   $
//
// stock_prices_yesterday[60] = 500

// stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

// get_max_profit(stock_prices_yesterday)
// # returns 6 (buying for $5 and selling for $11)


let get_max_profit = (prices) => {
  var maxProfit = -Number.MAX_VALUE;
  var lowestSeen = prices[0];

  for (let i = 1; i < prices.length; i++) {
    var currentProfit = prices[i] - lowestSeen;
    var maxProfit = Math.max(currentProfit, maxProfit);
    var lowestSeen = Math.min(prices[i], lowestSeen);
  }

  return maxProfit;
}

stock_prices_yesterday = [10, 7, 5, 8, 11, 9]  // 6
// stock_prices_yesterday = [10, 7, 5, 3, 2]   // -1
console.log(get_max_profit(stock_prices_yesterday));

