var BinaryTree = (() => {

  var Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  return {
    Node: Node,
  }
})();

let node1 = new tree.Node(12)

console.log(node1);

// # Set up tree
// tree = BinaryTree(1)
// tree.root.left = Node(2)
// tree.root.right = Node(3)
// tree.root.left.left = Node(4)
// tree.root.left.right = Node(5)

// # Test search
// # Should be True
// print tree.search(4)
// # Should be False
// print tree.search(6)

// # Test print_tree
// # Should be 1-2-4-5-3
// print tree.print_tree()


