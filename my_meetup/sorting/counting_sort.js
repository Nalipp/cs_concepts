let countingSort = (str) => {
  let counts = createCountsArr(str);
  let newStr = ''

  for (let i = 0; i < counts.length; i++) {
    let count = counts[i];

    if (count) {
      let char = String.fromCharCode(i);
      
      newStr += char.repeat(count);
    }
  }

  return newStr;
}


let createCountsArr = (str) => {
  let counts = [];

  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt();

    if (counts[charCode]) {
      counts[charCode] += 1;
    } else {
      counts[charCode] = 1;
    }
  }

  return counts;
}

let str = 'acbcabaababe'
console.log(countingSort(str));


