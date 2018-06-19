def node(val):
    return {
        'val': val,
        'next': None
    }

l = node(1)
l['next'] = node(2)
l['next']['next'] = node(3)
l['next']['next']['next'] = node(4)


def reverse(node):
    head = 'hi'

    def helper(node):
        if node['next'] and node['next']['next']:
            helper(node['next'])
        else:
            head = node['next']

        node['next']['next'] = node
        node['next'] = None

        return head

    return helper(node)


print(reverse(l))

# def reverse(node):
#     def reverse_helper(old_head, new_head):
#         if old_head is None:
#             return new_head

#         next_old_head = old_head.nxt
#         old_head.nxt = new_head

#         return reverse_helper(next_old_head, old_head)

#     return reverse_helper(node, None)

    


# class Node():
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next

# class Linked_list():
#     def __init__(self, head=None):
#         self.head = head

#     def reverse_list(self, start):
#         node = start

#         if node.next and node.next.next:
#             self.reverse_list(node.next)
#         else:
#             selnode.nex

#         node.next.next = node
#         node.next = None

#         return self.head

# n1 = Node(1)
# n1.next = Node(2)
# n1.next.next = Node(3)
# n1.next.next.next = Node(4)
# l1 = Linked_list(n1)

# print(l1.reverse_list(l1))

