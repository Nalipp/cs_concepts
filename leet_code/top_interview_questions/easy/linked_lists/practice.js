function Node(val, next) {
  this.val = val;
  this.next = next;
}

function insert(val, root) {
  let newNode = new Node(val);
  if (!root) return newNode;
  let node = root;
  while(node.next) node = node.next;
  node.next = newNode;
  return root;
}

function reverse(head) {
  if (!head || !head.next) return head;
  let nl = null;
  let ol = head;
  let next = head.next;
  while (next) {
    next = ol.next;
    ol.next = nl;
    nl = ol;
    ol = next;
  }
  return nl;
}

let n1 = insert(4);
insert(9, n1);
insert(12, n1);
insert(13, n1);

console.log(reverse(n1));

