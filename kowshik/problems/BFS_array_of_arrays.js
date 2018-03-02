class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let n1 = new Node('i');
n1.left = new Node('s')
n1.right = new Node('p')
n1.left.left = new Node('l')
n1.left.right = new Node('n')
n1.right.left = new Node('t')
n1.right.right = new Node('r')
n1.left.left.left = new Node('s')

function toArrs(node) {
  let queue = [node];
  let result = [[i]];
  let countt = 0;
  while (queue.length) {                         // [i]
    while(result[count][i]) {                    // [[i]]
      let current = queue.shift();               // [i]
      if (current.left) {                        // i.left
        queue.push(current.left);                // [s]
        result[count + 1].push(current.left)     // [[i], [s]
      }
      if (current.right) {
        queue.push(current.right);
        result[count + 1].push(current.right)
      }
      i++
    }
    count += 1;
  }
  return result;
}

console.log(toArrs(n1));

// reslut => [[i], [s, p], [l, n, t, r], [s]];
