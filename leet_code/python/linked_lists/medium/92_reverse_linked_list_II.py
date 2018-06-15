class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def reverseBetween(self, head, m, n):



l1 = ListNode(1)
l1.next = ListNode(2)
l1.next.next = ListNode(3)
l1.next.next.next = ListNode(4)
l1.next.next.next.next = ListNode(5)
# l1.next.next.next.next.next = ListNode(4)
# l1.next.next.next.next.next.next = ListNode(5)
# l1.next.next.next.next.next.next.next = ListNode(5)
# l1.next.next.next.next.next.next.next.next = ListNode(6)

def print_list(l):
    while l:
        print(l.val)
        l = l.next

s = Solution()
print_list(s.deleteDuplicates(l1))



# Input: 1->2->3->4->5
# m: 2
# n: 4

# Output: 1->4->3->2->5
