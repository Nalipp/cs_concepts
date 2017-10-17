// 900  -> 0
// 930  -> 1
// 1000 -> 2
// 1030 -> 3
// 1100
// 1130
// 1200 -> 5
// 1230 -> 6

// {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

// input
// [
//   {startTime: 0,  endTime: 1},
//   {startTime: 3,  endTime: 5},
//   {startTime: 4,  endTime: 8}, if 4 is between 0 and 1 then // between 3 and 5 && obj[i]endTime <  then obj[i] endTime
//   {startTime: 10, endTime: 12},
//   {startTime: 9,  endTime: 10},
// ]

// output
// [
//   {startTime: 0, endTime: 1},
//   {startTime: 3, endTime: 8},
//   {startTime: 9, endTime: 12},
// ]

let fullTimes = (times) => {
  var fullTimes = [times[0]];
  var maxEnd = times[0].endTime;

  for (let i = 1; i < times.length; i++) {
    for (let j = 0; j < fullTimes; j++) {
      if (times[i].startTime > fullTimes[j].endTime) maxEnd = fullTimes[j].endTime;
    }
  }

  return fullTimes;
};

var times = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
]

console.log(fullTimes(times));
