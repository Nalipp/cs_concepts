// ****************************************************************************************************
// convert tree to list

function List() {
  this.root = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

List.prototype.push = function(val) {
  let newNode = new ListNode(val);
  if (!this.root) this.root = newNode;
  else {
    let current = this.root;
    while(current) {
      if (current.next) current = current.next;
      else {
        current.next = newNode;
        current = null;
      }
    }
  }
  return this;
}

List.prototype.unshift = function(val) {
  let newNode = new ListNode(val);
  if (!this.root) this.root = newNode;
  else {
    newNode.next = this.root;
    this.root = newNode;
  }
  return this;
}

List.prototype.addInOrder = function(val) {
  if (!this.root) return this.push(val);
  if (val < this.root.val) return this.unshift(val);
  if (!this.root.next) {
    if (val < this.root.val) return this.unshift(val);
    else return this.push(val);
  }
  let newNode = new ListNode(val);
  let current = this.root;
  while (true) {
    if (!current.next) return this.push(val);
    if (current.val < val && val < current.next.val) {
      let temp = current.next;
      current.next = newNode;
      newNode.next = temp;
      return this;
    }
    current = current.next;
  }
}

function Tree() {
  this.root = null;
}

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Tree.prototype.add = function(val) {
  let newNode = new TreeNode(val);
  if (!this.root) return this.root = newNode;
  let current = this.root;
  while(true) {
    if (!current.left) {
      current.left = newNode;
      return this;
    }
    if (!current.right) {
      current.right = newNode;
      return this;
    }
    if (!current.left.left || !current.left.right) current = current.left;
    else if (!current.right.left || !current.right.right) current = current.right;
    else current = current.left;
  }
}

let tree = new Tree();
tree.add(17);
tree.add(4);
tree.add(2);
tree.add(3);
tree.add(9);
tree.add(8);
tree.add(6);

function convertTreeToList(tree) {
  let list = new List();
  if (!tree.root) return list;
  let queue = [tree.root];
  while (queue.length) {
    let current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    list.addInOrder(current.val);
  }
  return list;
}

