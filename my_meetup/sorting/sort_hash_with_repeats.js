let getCountObj = (str) => {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

let getFreqCounts = (obj) => {
  let counts = {};

  for (let key in obj) {
    let val = obj[key];

    if (counts[val]) {
      counts[val].push(key);
    } else {
      counts[val] = [key];
    }
  }

  return counts;
}

let getTopK = (arr, k) => {
  let results = [];

  for (let sub of arr) {
    let sorted = sub[1].sort();

    for (let i = 0; i < sorted.length; i++) {
      results.push(sorted[i])

      if (results.length === k) {
        return results;
      }
    }
  }

  return results;
}

let str = 'acbecabaaeaee';
let countObj = getCountObj(str);
let freqCounts = getFreqCounts(countObj);
let freqArr = Object.entries(freqCounts);
let sorted = freqArr.sort((a, b) => a[0] < b[0]);
let top3 = getTopK(sorted, 3);

console.log(top3); 
