class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def detectCycle(self, head):
        if not head: return None

        s = head
        f = head

        while f.next and f.next.next:
            s = s.next
            f = f.next.next

            if s == f:
                l = head

                while True:
                    if s == l:
                        return l

                    s = s.next
                    l = l.next

        return None


l = ListNode(0)
l.next = ListNode(1)
l.next.next = ListNode(2)
l.next.next.next = ListNode(3)
l.next.next.next.next = l.next

d = Solution()
print(d.detectCycle(l).val)

