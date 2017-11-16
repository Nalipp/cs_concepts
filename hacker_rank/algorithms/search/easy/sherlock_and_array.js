function solve(a){
  let leftTotal = a[0];
  if (a.length === 1) return 'YES';
  if (a.length === 2) return 'NO';
  let rightTotal = a.reduce((s, v, i) => {
    if (i >= 2) return s + v;
    else return s + 0;  
  }, 0);
  for (let i = 1; i < a.length; i++) {
    if (leftTotal === rightTotal) return 'YES';
    else {
      leftTotal += a[i];
      rightTotal -= a[i + 1];
    }
  }
  return 'NO';
}

var a = [1, 3, 4, 2, 2, 3, 3];  // YES
var a = [1, 3, 4, 2, 2, 3, 5];  // NO
console.log(solve(a));
