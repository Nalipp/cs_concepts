var rotateString = function(A, B) {
  if (A.length !== B.length) return false;
  if (!A.length && !B.length) return true;
  let cp = A.slice();

  for (let i = 0; i < A.length; i++) {
    if (cp === B) return true;
    cp = cp.slice(1) + cp[0];
  }

  return false;
};

// console.log(rotateString('cab', 'abc'));
// console.log(rotateString('abcde', 'cdeab')); 
// console.log(rotateString('abcde', 'abced')); 
console.log(rotateString("bqqutquvbtgouklsayfvzewpnrbwfcdmwctusunasdbpbmhnvy", "wpnrbwfcdmwctusunasdbpbmhnvybqqutquvbtgouklsayfvze"));
