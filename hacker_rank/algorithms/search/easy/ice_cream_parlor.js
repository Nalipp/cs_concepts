// 2 (number of times)
// 4 (dollars)
// 5
// 1 4 5 3 2
// ------
// 4 (dollars)
// 4
// 2 2 4 3

function processData(input) {
  let arr = input.split('\n').slice(1);

  for (let i = 0; i < arr.length; i += 3) {
    let dollars = arr[i];
    let costs = arr[i + 2].split(' ');

    for (let i = 0; i < costs.length - 1; i++) {
      for (let j = i + 1; j < costs.length; j++) {
        if (Number(costs[i]) + Number(costs[j]) === Number(dollars)) {
          console.log(i + 1, j + 1);
        }
      }
    }
  }
} 

let str = '2\n4\n5\n1 4 5 3 2\n4\n4\n2 2 4 3';
processData(str);

