// Delete a node from a liked list given ONLY the value of the node.
//
// Hint: it is not possible to delete the last element from the list
// deleteNode(c);  // should throw an error

function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

function deleteNode(node) {
}

deleteNode(b); 
console.log(a); // => 'A' -> 'C';

deleteNode(a);
console.log(a); // => 'B' -> 'C';


  // if (!node.next) {
  //   throw new Error('cannot delete last element');
  // }
  // else {
  //   node.val = node.next.val; 
  //   node.next = node.next.next;
  // }
