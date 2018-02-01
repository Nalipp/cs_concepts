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
var second = new ListNode(2);
var third = new ListNode(3);
var fourth = new ListNode(4);
var fifth = new ListNode(5);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

var removeNthFromEnd = function(head, n) {
  if(!head) return head; 

  let slow = head;
  let fast = head;

  while(n--) fast = fast.next;

  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};

console.log(removeNthFromEnd(first, 3));


