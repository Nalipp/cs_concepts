function super_reduced_string(s){
  let hash = {};
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) delete hash[s[i]];
    else hash[s[i]] = true;
  }
 
  for (let k in hash) {
    result += k;
  }

  return result ? result : 'Empty String';
}

// console.log(super_reduced_string('aaabccddd'));
// console.log(super_reduced_string('abbcde'));
// console.log(super_reduced_string('aabbcc'));
// console.log(super_reduced_string('baab'));
console.log(super_reduced_string('zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'));

