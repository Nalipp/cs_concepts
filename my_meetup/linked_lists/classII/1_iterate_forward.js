function ListNode(val) {
  this.val = val;
  this.next = null;
}

var iterateList = function(node) {
  // code here...
};

var l1 = new ListNode(1); 
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

// Input: 1 --> 2 --> 3 --> 4 --> null
// Print: 1, 2, 3, 4
// Return: None

iterateList(l1);


// ************************************************************
// Possible Solutions


// 1. recursivley

// var iterateList = function(node) {
//   console.log(node.val);

//   if (!node.next) return;
//   iterateList(node.next);
// };


// 2. iteratively

// var iterateList = function(node) {
//   while(node) {
//     console.log(node.val);
//     node = node.next;
//   }
// };


