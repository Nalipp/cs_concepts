let rareCoins = (amt, d) => {
  let results = [];
  for (let i = 0; i < d.length; i++) {
    if (amt % d[i] === 0) {
      let times = (amt / d[i]);
      results.push(String(d[i]).repeat(times).split(''));
    } else {

    }
  }
  return results;
}

let amt = 4;
let denominations = [1, 2, 3];
console.log(rareCoins(amt, denominations)); 


// 4 -> [1, 2, 3];
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// 4 -> [2, 3];
// 2, 2
