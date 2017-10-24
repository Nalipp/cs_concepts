function solve(year){
  if (year % 100 === 0) {
    if (year % 400 !== 0 && year < 1918 && year >= 1700) return '13.09.' + year;
    return '12.09.' + year;
  }
  if (year % 4 === 0) return '12.09.' + year;
  return '13.09.' + year;
}

console.log(solve(2000));   // 12.09.2016
console.log(solve(1800));   // 12.09.1800
console.log(solve(1700));   // 12.09.1700
// 12.09.2016
// 13.09.2017
