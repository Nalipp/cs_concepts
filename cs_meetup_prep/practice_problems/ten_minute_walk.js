
function isTenMin(directionArr) {
  if (directionArr.length !== 10) return false;
  let verticalDirection = 0;
  let horizontalDirection = 0;
  for (let i = 0; i < directionArr.length; i++) {
    let pos = directionArr[i];
    if (pos === 'n') verticalDirection += 1;
    if (pos === 's') verticalDirection -= 1;
    if (pos === 'e') horizontalDirection += 1;
    if (pos === 'w') horizontalDirection -= 1;
  }
  return verticalDirection === 0 && horizontalDirection === 0;
}

let directions = ['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'n', 's'];
console.log(isTenMin(directions));
