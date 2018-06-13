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

let str = 'cbecaeaaeaeab';
let countsObj = getCountObj(str);
let arr = Object.entries(countsObj);
let sorted = arr.sort((a, b) => a[1] < b[1]);

console.log(sorted); 
