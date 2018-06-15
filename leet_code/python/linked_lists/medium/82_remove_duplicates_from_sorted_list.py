class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def deleteDuplicates(self, head):
        if not head:
            return head

        cur = ListNode('x')
        cur.next = head
        head = cur

        while cur:
            cur.next = self.find_next(cur)
            cur = cur.next

        return head.next


    def find_next(self, node):
        if node.next and node.next.next:
            if node.val != node.next.val != node.next.next.val:
                return node.next
            else:
                return self.find_next(node.next)
        elif node.next:
            if node.val != node.next.val:
                return node.next
        else:
            return None


l1 = ListNode(1)
l1.next = ListNode(1)
l1.next.next = ListNode(2)
l1.next.next.next = ListNode(3)
l1.next.next.next.next = ListNode(4)
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



# Input: 1->2->3->3->4->4->5
# Output: 1->2->5
# Example 2:

# Input: 1->1->1->2->3
# Output: 2->3
