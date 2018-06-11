/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var first = new ListNode(1);
// var second = new ListNode(2);
// var third = new ListNode(3);
// var fourth = new ListNode(4);
// var fifth = new ListNode(5);
// var sixth = new ListNode(6);

// first.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;
// fifth.next = sixth;

var removeNthFromEnd = function(head, n) {
  if (!head) return head; 
  if (n === 1) {
    let current = head;
    if (current.next) {
      while (current.next.next) {
        current = current.next;
      }
    } else {
      return null;
    }
    current.next = null;
    return head;
  }

  let slow = head;
  let fast = head;

  while(n--) {
    fast = fast.next;
  }

  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};

// console.log(removeNthFromEnd(first, 3));  // => (original 1 => 2 => 3 => 4 => 5 => 6) (result 1 => 2 => 3 => 5 => 6)
// console.log(removeNthFromEnd(first, 1));  // => (original 1 => 2 => 3 => 4 => 5 => 6) (result 1 => 2 => 3 => 4 => 5)

// console.log(removeNthFromEnd(first, 3));  // => (original 1 => 2 => 3 => 4 => 5) (result 1 => 2 => 3 => 5)

console.log(removeNthFromEnd(first, 1));  // => (original 1 => 2) (result 1)
// console.log(removeNthFromEnd(first, 1));  // => (original 1) (result null)

// console.log(removeNthFromEnd(first, 4));  // => (original 1 => 2 => 3 => 4 => 5) (result 1 => 3 => 4 => 5)
// console.log(removeNthFromEnd(first, 1));  // => (original 1 => 2 => 3 => 4 => 5) (result 1 => 2 => 3 => 4)
// console.log(removeNthFromEnd(first, 5));  // => (original 1 => 2 => 3 => 4 => 5) (result 2 => 3 => 4 => 5)
// console.log(removeNthFromEnd(first, 2));  // => (original 1 => 2) (result 2)
