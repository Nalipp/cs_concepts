let hiCal = (arr) => {
  let sorted = arr.slice();
  sorted.sort((a, b) => a.startTime < b.startTime ? 1 : -1);

  let mergedTimes = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    let index = 0;
    if (sorted[i].endTime >= mergedTimes[index].startTime) {
      mergedTimes[index].startTime = sorted[i].startTime;
      if (arr[i].endTime > mergedTimes[index]) {
        mergedTimes[index].endTime = arr[i].endTime;
      }
    } else {
      mergedTimes.push(sorted[i]);
      index++;
    }
  }
  return mergedTimes;

}

let input = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]
// [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

console.log(hiCal(input)); 

// 9:00 -> 0
// 9:30 -> 1
// 10:00 -> 2
// 10:30 -> 3
// 11:00 -> 4
// 11:30 -> 5
// 12:00 -> 6
// 12:30 -> 7

// meeting1 = {startTime: 2, endTime: 5}  -> 10:00 - 11:30

// [ { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 4, endTime: 10 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 0, endTime: 1 } ]
