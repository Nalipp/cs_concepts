class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def print_list(self, l):
        while l:
            print(l.val)
            l = l.next

    def mergeTwoLists(self, l1, l2):
        l3 = ListNode('x')
        result = l3

        while l1 and l2:
            if l1.val < l2.val:
                l3.next = l1
                l1 = l1.next
                l3 = l3.next
            else:
                l3.next = l2
                l2 = l2.next
                l3 = l3.next

        if l1:
            l3.next = l1
        else:
            l3.next = l2

        return result.next


l1 = ListNode(1)
l1.next = ListNode(2)
l1.next.next = ListNode(4)

l2 = ListNode(1)
l2.next = ListNode(3)
l2.next.next = ListNode(4)

s = Solution()

print(s.mergeTwoLists(l1, l2))

# l1 = 1->2->4, 
# l2 = 1->3->4
# output 1->1->2->3->4->4
