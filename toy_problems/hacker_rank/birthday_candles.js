let birthdayCandles = (n, ar) => {
  let hash = {};
  let maxCount = 0;

  for (let i = 0; i < n; i++) {
    if (hash[ar[i]] === undefined) hash[ar[i]] = 1;
    else hash[ar[i]] += 1;

    if (hash[ar[i]] > maxCount) maxCount = hash[ar[i]];
  }

  console.log(maxCount);
}

let n = 4;
let ar = [3, 2, 1, 3];
birthdayCandles(n, ar);
