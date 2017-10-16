let printRange = (min, max) => {
  if (min === max) return console.log(max);
  console.log(min);
  return printRange(min + 1, max);
}

printRange(3, 7);
