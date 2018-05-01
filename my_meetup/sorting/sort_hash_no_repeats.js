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

let convertObjCountToArrCounts = (obj) => {
  // let results = [];

  // for (let key in obj) {
  //   let value = obj[key];

  //   results.push([key, value]);
  // }

  // return results;

  return Object.entries(obj);
}

let sortArrOfCounts = (arr) => {
  return arr.sort((a, b) => a[1] < b[1]);
}

let getTopKFrequent = (arr, k) => {
  let results = [];

  while (results.length < k && arr.length) {
    let val = arr.shift()[0];

    results.push(val);
  }

  return results;
}

let str = 'acecabaaeaee';
let countsObj = getCountObj(str);
let arrCounts = convertObjCountToArrCounts(countsObj);
let sorted = sortArrOfCounts(arrCounts);
let top3 = getTopKFrequent(sorted, 3);

console.log(top3); 
