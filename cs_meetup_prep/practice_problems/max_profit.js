function getMaxProfit(yesterdaysPrices) {
  if (yesterdaysPrices.length < 2) throw Error ('Calculating a profit requires at least two prices');
  let minPrice = yesterdaysPrices[0];
  let maxProfit = yesterdaysPrices[1] - yesterdaysPrices[0]

  for (i = 1; i < yesterdaysPrices.length; i++) {
    maxProfit = Math.max(maxProfit, yesterdaysPrices[i] - minPrice);
    minPrice = Math.min(minPrice, yesterdaysPrices[i]);
  }

  return maxProfit;
}

let stockPricesYesterday = [10, 7, 5, 8, 11];
// let stockPricesYesterday = [10, 7, 5, 3, 1];

console.log(getMaxProfit(stockPricesYesterday));


// function getMaxProfit(yesterdaysPrices) {

//   let maxProfit = -999999999;

//   for (let earlierTime = 0; earlierTime < yesterdaysPrices.length; earlierTime++) {
//     for (let laterTime = earlierTime + 1; laterTime < yesterdaysPrices.length; laterTime++) {
//       let potentialProfit = yesterdaysPrices[laterTime] - yesterdaysPrices[earlierTime];
//       maxProfit = Math.max(maxProfit, potentialProfit);
//     }

//   }

//   return maxProfit;
// }

// const stockPricesYesterday = [10, 7, 5, 8, 11];
// const stockPricesYesterday = [10, 7, 5, 4, 1];

// console.log(getMaxProfit(stockPricesYesterday));


// function getMaxProfit(priceArr) {
//   let maxProfit = 0;

//   for (let i = 0; i < priceArr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (priceArr[j] < priceArr[i]) {
//         maxProfit = Math.max(maxProfit, priceArr[i] - priceArr[j])
//       }
//     }
//   }

//   return maxProfit;
// }

// const stockPricesYesterday = [10, 7, 5, 8, 11];
// const stockPricesYesterday = [10, 7, 5, 4, 1];

// console.log(getMaxProfit(stockPricesYesterday));
