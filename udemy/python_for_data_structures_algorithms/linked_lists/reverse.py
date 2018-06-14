class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None


def reverse(l): 
    end = None

    while l:
        temp = l
        l = l.next
        temp.next = end
        end = temp

    return end


a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)

a.next = b
b.next = c
c.next = d



def print_list(l):
    while l:
        print(l.val)
        l = l.next

print_list(reverse(a))

