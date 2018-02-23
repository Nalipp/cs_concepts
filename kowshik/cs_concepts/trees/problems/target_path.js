class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function targetPath(node, target) {
  if(!node) return false;
  let sum = 0;

  function inner(node, target, sum) {
    if(!node) return false;
    sum += node.val;
      
    if (sum === target) return true;
    return inner(node.left, target, sum) || inner(node.right, target, sum);
  }

  return inner(node, target, sum)
}

n1 = new Node(1)
n1.left = new Node(4);
n1.right = new Node(2);
n1.right.left = new Node(6);
n1.right.right = new Node(4);

console.log(targetPath(n1, 7)); 



  // if (!node) return false;
  // let decreasedTarget = target - node.val;            
  // if (decreasedTarget === 0) return true;

  // let x = targetPath(node.left, decreasedTarget) 
  // let y = targetPath(node.right, decreasedTarget);
  // return x || y;
