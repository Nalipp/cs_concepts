let productOfIntegers = (arr) => {
  let includesZero = false;
  let productsTotal = arr.reduce((p, v) => {
    if (v === 0) {
      includesZero = true;
      return p * 1;
    }
    else return p * v;
  }, 1);

  let products = arr.map((v, i) => {
    if (includesZero) {
      if (arr[i] !== 0) return 0;
      else return productsTotal;
    }
    return productsTotal / v;
  });
  return products;
}

console.log(productOfIntegers([1, 7, 3, 4])); // [84, 12, 28, 21]
console.log(productOfIntegers([2, 3, 0, 4])); // [0, 0, 24, 0]
console.log(productOfIntegers([3, 1, 2, 5, 6, 4])); 

