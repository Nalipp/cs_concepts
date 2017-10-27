let findRotationPoint = (words) => {
  let min = -1;
  let max = words.length;

  while (min + 1 < max) {
    let distance = max - min;
    let middle = Math.floor(distance / 2);
    let guess = min + middle;

    if (words[guess -1] > words[guess]) return guess;

    if (words[0] > words[guess]) max = guess;
    else min = guess;
  }
  return 0;
}

// words.length = 13
var words = [
  'lathargic',
  'myopic',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(findRotationPoint(words)); // 7




