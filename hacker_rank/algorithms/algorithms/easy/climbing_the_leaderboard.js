var n = 7; 
var scores = [ 100, 100, 50, 40, 40, 20, 10 ];
var alice = [ 5, 25, 50, 120 ];

let setCount = 1;
let map = new Map();

for (let i = 0; i < scores.length; i++) {
  if (scores[i] !== scores[i + 1]) map.set(scores[i], setCount++);
}

for (let i = 0; i < alice.length; i++) {
  if(alice[i] > scores[0]) {
    console.log(1);
    continue;
  }
  if(alice[i] < scores[scores.length - 1]) {
    console.log(map.size + 1);
    continue;
  }
  if (map.has(alice[i])) console.log(map.get(alice[i]));

  let min = -1;
  let max = scores.length

  while (min + 1 < max) {
    let distance = max - min;
    let guess = min + Math.floor(distance / 2);

    if (alice[i] > scores[guess] && alice[i] < scores[guess - 1]) console.log(map.get(scores[guess]));
    if (alice[i] > scores[guess]) max = guess;
    else min = guess;
  }
}
