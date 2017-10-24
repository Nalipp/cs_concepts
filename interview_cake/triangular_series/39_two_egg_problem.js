let twoEggProblem = (r) => {
  var start = 1;
  var increment = 14;
  var brokeBetween = untilItBreakes(start, increment, increment, r)
  console.log(brokeBetween);

  for (let i = brokeBetween[0]; i < brokeBetween[1]; i++) {
    console.log(i);
    if (i >= r) return Math.floor(r);
  }
}

let untilItBreakes = (start, end, increment, r) => {
  if (r < end) return [start, end];
  start += increment; 
  end += increment;
  return untilItBreakes(Math.floor(start), Math.ceil(end), increment -= 1, r)
}

// var randomFloor = Math.floor(Math.random() * (100 - 1));
// console.log(twoEggProblem(randomFloor));
console.log(twoEggProblem(98));

