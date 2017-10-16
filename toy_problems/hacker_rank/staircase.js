let staircase = (num) => {
  for (let i = num - 1; i >= 0; i--) {
    let baseStr = ' '.repeat(num);
    let endStr = '#'.repeat(num - i);
    console.log(baseStr.slice(0, i) + endStr);
  }
}

staircase(4);
