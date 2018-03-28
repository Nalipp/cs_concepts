function x(n, j) {
  var z = (j / n) * 100;

  if (z < 15) {
    return false;
  } else {
    return true;
  }
}

function isGoodTip(mealCost, amountTipped) {
  var percentage = (amountTipped / mealCost) * 100;

  if (percentage < 15) {
    return false;
  } else {
    return true;
  }
}

console.log(isGoodTip(44, 7));
