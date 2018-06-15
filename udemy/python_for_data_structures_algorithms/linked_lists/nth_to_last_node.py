class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None


def nth_to_last(n, l): 
    if n < 1: return None
    head = Node('x')
    head.next = l
    f = head
    s = head

    while n:
        f = f.next
        n -= 1

    while f:
        f = f.next
        s = s.next

    if s.val == 'x':
        return None
    else:
        return s

    return None

a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)
e = Node(5)

a.next = b
b.next = c
c.next = d
d.next = e

# print(nth_to_last(0, a))
# print(nth_to_last(1, a).val)
# print(nth_to_last(2, a).val)
# print(nth_to_last(3, a).val)
# print(nth_to_last(4, a).val)
# print(nth_to_last(5, a).val)
print(nth_to_last(6, a))

