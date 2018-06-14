class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def removeNthFromEnd(self, head, n):
        p1 = head
        p2 = head
        j = -n 

        if n == 1:
            if not p1.next: return None

            while p1.next.next:
                p1 = p1.next

            p1.next = None
            return head

        while p2.next: 
            p2 = p2.next

            if j >= 0:
                p1 = p1.next

            j += 1

        if j < 0:
            return head.next

        p1.next = p1.next.next
        return head


def print_list(l):
    while l:
        print(l.val)
        l = l.next

l1 = ListNode(1)
l1.next = ListNode(2)
l1.next.next = ListNode(3)
l1.next.next.next = ListNode(4)
l1.next.next.next.next = ListNode(5)

s = Solution()

# print_list(s.removeNthFromEnd(l1, 1)) # 1 2 3 4 
# print_list(s.removeNthFromEnd(l1, 2)) # 1 2 3 5
# print_list(s.removeNthFromEnd(l1, 3)) # 1 2 4 5
# print_list(s.removeNthFromEnd(l1, 4)) # 1 3 4 5
# print_list(s.removeNthFromEnd(l1, 5)) # 2 3 4 5

# Given linked list: 1->2->3->4->5, and n = 2.
# After removing the second node from the end, the linked list becomes 1->2->3->5.

# 1->2->3, 1 => 1->2
# 1->2->3, 2 => 1->3
# 1->2->3, 3 => 2->3

