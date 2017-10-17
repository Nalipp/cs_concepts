let doMoviesMatchFlightLength = (flightTime, movieLengthsArr) => {
  let set = new Set();
  for (let i = 0; i < movieLengthsArr.length; i++) {
    let diff = flightTime - movieLengthsArr[i];
    if (set.has(diff)) return true;
    set.add(movieLengthsArr[i]);
  }
  return false;
}

console.log(doMoviesMatchFlightLength(200, [112, 96, 121, 104, 114])); // true
console.log(doMoviesMatchFlightLength(220, [121, 88, 93, 90]));        // false
