function ListNode(val) {
  this.val = val;
  this.next = null;
}

var iterateBackward = function(n) {
  // code here...
}

var l1 = new ListNode(1); 
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

// Input: 1 --> 2 --> 3 --> 4 --> null
// Print: 4, 3, 2, 1
// Return: None

console.log(iterateBackward(l1));



// ************************************************************
// Possible Solutions

// 1. recursivley
    // var iterateBackward = function(n) {
    //   if (!n) return;

    //   iterateBackward(n.next);
    //   console.log(n.val)
    // }


// 2. iterativley
  // var last = null;
  // var temp;

  // while(n) {
  //   temp = n.next;
  //   n.next = last;
  //   last = n;
  //   n = temp;
  // }

  // n = last

  // while(n) {
  //   console.log(n.val);

  //   n = n.next;
  // }

