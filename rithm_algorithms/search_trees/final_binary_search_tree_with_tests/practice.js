function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(newVal) {
  if (newVal < this.value) {
    if (!this.left) this.left = new BST(newVal);
    else this.left.insert(newVal);
  }
  if (newVal > this.value) {
    if (!this.right) this.right = new BST(newVal);
    else this.right.insert(newVal);
  }
}


BST.prototype.contains = function(findVal) {
  if (this.value === findVal) return true;

  if (findVal < this.value) {
    if (!this.left) return false;
    return this.left.contains(findVal)
  }
  if (findVal > this.value) {
    if (!this.right) return false
    return this.right.contains(findVal)
  }
}

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  let queue = [this]

  while (queue.length) {
    let treeNode = queue.shift()
    iteratorFunc(treeNode)
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
}

BST.prototype.getMin = function() {
  if (this.left) return this.left.getMin();
  else return this.value;
}

BST.prototype.getMax = function() {
  if (this.right) return this.right.getMax();
  else return this.value;
}

let bst1 = new BST(15);

bst1.insert(30);
bst1.insert(70);
bst1.insert(100);
bst1.insert(60);
bst1.insert(59);
bst1.insert(20);
bst1.insert(45);
bst1.insert(35);
bst1.insert(85);
bst1.insert(105);
bst1.insert(10);

bst1.breadthFirstTraversal(function(node) {
  // console.log(node.value);
})

// console.log(bst1.contains(70));
// console.log(bst1.getMin());
// console.log(bst1.getMax());

// console.log(JSON.stringify(bst1));

