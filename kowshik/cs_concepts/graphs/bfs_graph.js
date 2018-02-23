function bfs(graph, root) {
  let resultLens = {};

  for (let i = 0; i < graph.length; i++) {
    resultLens[i] = Infinity;
  }

  resultLens[root] = 0;

  let queue = [root];
  let current;

  while (queue.length) {
    current = queue.shift();
    let neighborIdx = [];

    graph[current].forEach((n, i) => {
      if (n === 1) neighborIdx.push(i);
    });

    for (var j = 0; j < neighborIdx.length; j++) {
      if (resultLens[neighborIdx[j]] === Infinity) {
        resultLens[neighborIdx[j]] = resultLens[current] + 1;
        queue.push(neighborIdx[j])
      }
    }
  }
  return resultLens;
}

let ajacencyMatrixGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(ajacencyMatrixGraph, 1));

// => 
// object = {
//   0: 2,
//   1: 0,
//   2: 1,
//   3: 3,
//   4: Infinity,
// }

