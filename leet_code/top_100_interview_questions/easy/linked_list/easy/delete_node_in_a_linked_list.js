/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var first = new ListNode(1);
var second = new ListNode(2);
var third = new ListNode(3);
var fourth = new ListNode(4);

first.next = second;
second.next = third;
third.next = fourth;

var deleteNode = function(node) {
  
};

