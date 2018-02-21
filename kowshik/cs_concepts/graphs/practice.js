let verticies = ['chicago', 'austin', 'denver', 'boston'];

class Edge {
  constructor(startVertex, endVertex, weight) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }
}

let e1 = new Edge(verticies[0], verticies[1], 700);
let e2 = new Edge(verticies[0], verticies[3], 800);
let e3 = new Edge(verticies[1], verticies[2], 400);
let e4 = new Edge(verticies[1], verticies[3], 900);

let edgeList = [e1, e2, e3, e4];

// verticies space complexity O(|v|)
// edgeList space complextiy O(|e|)
// overall space complexity P(|v| + |e|)

// most common opperation is to find all nodes directly connected to a given node
// code for directed (chest start) and undirected (checks both start and end) graphs
// time complexity O(|e|)

function findConnectingNodes(target, verticies, edgeList) {
  let verticy;
  for (let v in vertices) {
    if (v.startVer ===  
  }
  for (let node in edgeList) {
  }
}

findConnectingNodes('chicago', verticies, edgeList)

// second common opperation is finding if two nodes are connected or not
// time complexity O(|e|)


// both of these are costly, how can we make them more storage more efficient
