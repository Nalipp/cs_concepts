var arr = [ 
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 9, 2, -4, -4, 0 ],
  [ 0, 0, 0, -2, 0, 0 ],
  [ 0, 0, -1, -2, -4, 0 ]
]

let maxTotal = -Number.MAX_VALUE;

for (let i = 0; i < arr.length -2; i++) {
  for (let j = 0; j < arr[i].length - 2; j++) {
    let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
    let mid = arr[i+1][j+1];
    let btm = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
    let currentTotal = top + mid + btm;
    maxTotal = Math.max(maxTotal, currentTotal);
  }
}
console.log(maxTotal);
