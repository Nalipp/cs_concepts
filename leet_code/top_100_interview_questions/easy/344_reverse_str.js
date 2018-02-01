function reverseStr(str) {
  let arr = str.split('');
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var pos2 = arr.length - (i + 1);
    var temp = arr[i];
    arr[i] = arr[pos2];
    if (pos2 !== i) arr[pos2] = temp;
  }
  return arr.join('');
}

console.log(reverseStr('hello'));
