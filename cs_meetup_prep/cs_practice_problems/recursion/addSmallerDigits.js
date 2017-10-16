let addSmallerDigits = (num) => {
  if (num === 1) return 1;
  return num + addSmallerDigits(num - 1);
}

console.log(addSmallerDigits(8)); 
