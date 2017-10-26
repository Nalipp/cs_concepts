// Sample Input
//   10
//   203 204 205 206 207 208 203 204 205 206        what is missing in this list
//   13
//   203 204 204 205 206 207 205 208 203 206 205 206 204
// Sample Output
//   204 205 206

function processData(input) {
  let missing = [];
  let split = input.split('\n');
  let list1 = split[1].split(' ');
  let list2 = split[3].split(' ');
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < list1.length; i++) {
    if (obj1[list1[i]]) obj1[list1[i]] += 1;
    else obj1[list1[i]] = 1;
  }
  for (let i = 0; i < list2.length; i++) {
    if (obj2[list2[i]]) obj2[list2[i]] += 1;
    else obj2[list2[i]] = 1;
  }

  let obj2Keys = Object.keys(obj2);
  for (let i = 0; i < obj2Keys.length; i++) {
    let checkKey = obj2Keys[i];
    if (obj1[checkKey]) {
      let diff = obj2[checkKey] - obj1[checkKey]
      if (diff > 0) missing.push(checkKey);
    } else {
      missing.push(checkKey);
    }
  }
  console.log(missing.join(' '));
} 

var str = '10\n203 204 205 206 207 208 203 204 205 206\n13\n203 204 204 205 206 207 205 208 203 206 205 206 204'
processData(str);
