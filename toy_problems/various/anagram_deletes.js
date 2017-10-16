let anagramDeletes = (str1, str2) => {
  let str1Cp = str1.slice().split('');
  let str2Cp = str2.slice().split('');

  let max = str1Cp.length >= str2Cp.length ? str1Cp : str2Cp;
  let min = max === str1Cp ? str2Cp : str1Cp;

  for (let i = 0; i < max.length; i++) {
    if (min.includes(max[i])) {
      let pos1 = max.indexOf(min[i]);
      let pos2 = min.indexOf(max[i]);
      max.splice(pos1, 1);
      min.splice(pos2, 1);
    }
  }

  console.log(max);
  console.log(min);

  console.log(max.concat(min).length);
}

let a = 'cde';
let b = 'abce';

anagramDeletes(b, a);
