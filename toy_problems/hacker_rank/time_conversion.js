let timeConversion = (s) => {
  if (s.slice(s.length - 2) === 'PM') {
    if (Number(s.slice(0, 2)) < 12) {
      return (Number(s.slice(0, 2)) + 12) + s.slice(2, -2);
    }
    return (Number(s.slice(0, 2)) + 00) + s.slice(2, -2);
  }

  if (s.slice(0, 2) === '12') return '00' + s.slice(2, s.length - 2);
  return s.slice(0, s.length - 2);
}
console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('04:59:59AM'));
console.log(timeConversion('12:45:54PM'));
console.log(timeConversion('12:40:22AM'));
