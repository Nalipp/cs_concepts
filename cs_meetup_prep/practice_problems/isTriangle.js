
function isTriangle(a, b, c) {
  let arr = [a, b, c];

  let min = Math.min(a, b);
  min = Math.min(min, c);

  doubleMin = min * 2;

  doubleMin1 = arr.indexOf(doubleMin);
  if (doubleMin1 === -1) return false;

  arr.splice(doubleMin1, 1);

  return (arr.indexOf(doubleMin) !== -1);
}

console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));
