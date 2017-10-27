function processData(input) {
  let split = input.split('\n');
  let divisible = split[0][2];
  let arr = split[1].split(' ');
  let count = 0;

  for (let i = 0; i < arr.length -1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let total = Number(arr[i]) + Number(arr[j]);
      if (total % 3 !== 0) count += 1;
    }
  }

  console.log(count);
}

let str = '4 3\n1 7 2 4';
processData(str);
