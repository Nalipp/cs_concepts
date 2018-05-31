// *****************************************************
// isPalindrome
// https://repl.it/@nateplipp/LinkedListIsPalindrome

// Determine if a linked list is a palindrome

//   Input  : 1 -> 2 -> 2 -> 1
//   Output : true
//
//   Input  : 1 -> 2 -> 2 -> 4
//   Output : false


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(2);
l1.next.next.next = new ListNode(1);

function isPalindrome(head) {
  // code here...
}

console.log(isPalindrome(l1)); 


// **************************************************
// possible solutions

// function isPalindrome(head) {
//   if (!head || !head.next) return true;
//   let mid = findMid(head);
//   let first = head;
//   let second = reverse(mid);
//   while(second) {
//     if (first.val !== second.val) return false;
//     second = second.next;
//     first = first.next;
//   }
//   return true;
// };

// function findMid(head) {
//   let fast = head;
//   let slow = head.next;
//   while(fast.next && fast.next.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   return slow;
// }

// function reverse(head) {
//   let h1 = head;
//   let h2 = null;
//   let temp;
    
//   while(h1) {
//     temp = h1.next;
//     h1.next = h2;
//     h2 = h1;
//     h1 = temp;
//   }
    
//   return head = h2;
// }

// console.log(isPalindrome(l1));
