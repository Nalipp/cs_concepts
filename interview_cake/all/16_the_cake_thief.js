// **************************************************************************************************** 
// knapsack problem

var cakeTypes = [
  {weight: 7, value: 160}, 
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

var capacity = 20;

function getMaxCapacity(cakeTypes, capacity) {
  let maxCapacities = [];
  for (let i = 0; i <= capacity; i++) {
    maxCapacities[i] = 0;
  }
  for (let current = 0; current < maxCapacities.length; current++) {
    let currentMax = 0;
    cakeTypes.forEach((cake) => {
      if (cake.weight <= current) {
        totalWithCurrent = cake.value + maxCapacities[current - cake.weight];
        currentMax = Math.max(currentMax, totalWithCurrent);
      }
    });
    maxCapacities[current] = currentMax;
  }
  return maxCapacities[capacity];
}

console.log(getMaxCapacity(cakeTypes, capacity));

