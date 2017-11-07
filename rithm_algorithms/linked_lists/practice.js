var myGradesCalculate = (function () {
  var myGrades = [93, 95, 88, 0, 55, 91];

  return {
    average: function() {
      var total = myGrades.reduce(function(accumulator, item) {
        return accumulator + item;
        }, 0);
        
      return'Your average grade is ' + total / myGrades.length + '.';
    },

    failing: function() {
      var failingGrades = myGrades.filter(function(item) {
          return item < 70;
        });

      return 'You failed ' + failingGrades.length + ' times.';
    }
  }
})();

console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());
