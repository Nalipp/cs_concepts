function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(6); 
l1.next = new ListNode(6);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(6);
l1.next.next.next.next = new ListNode(4);
l1.next.next.next.next.next = new ListNode(5);
l1.next.next.next.next.next.next = new ListNode(6);

// Input: 6 --> 6 --> 3 --> 6 --> 4 --> 5 --> 6 --> null, val = 6
// Return: 3 --> 4 --> 5 --> null

function remove(head, target) {
}

console.log(remove(l1, 6)); 




// ************************************************************
// possible solutions

  // function remove(head, target) {
  //   var helper = new ListNode('h');
  //   helper.next = head;
  //   var cur = helper

  //   while(cur.next) {
  //     if (cur.next.val === target) {
  //       cur.next = cur.next.next;
  //     } else {
  //       cur = cur.next;
  //     }
  //   }
    
  //   return helper.next;
  // }
