function processData(input) {
  let str = input.split('\n')[1];
  let totalCounts = 0;
  let aboveOcean = false;
  let underOcean = false;
  let totalValleys = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'U') totalCounts += 1;
    if (str[i] === 'D') totalCounts -= 1;                       

    if (underOcean && totalCounts === 0) totalValleys += 1; 

    if (totalCounts > 0) {
      aboveOcean = true;
      underOcean = false;
    }
    if (totalCounts < 0) {
      underOcean = true;
      aboveOcean = false;
    }
  }
  console.log(totalValleys);
} 

let input = '8\nUDDDUDUU';        // 1
// let input = '10\nDDUUDDUDUUUD' // 2
processData(input);
