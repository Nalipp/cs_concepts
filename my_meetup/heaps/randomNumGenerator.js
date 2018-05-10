let randomNumGenerator = function(count) {
  let results = [];

  console.log('generating random numbers....');

  while (results.length < count) {
    let randNum = Math.floor(Math.random() * 1000000) + 1;
    results.push(randNum);
  }

  console.log('random generator complete'); 

  return results;
}

module.exports = randomNumGenerator;
