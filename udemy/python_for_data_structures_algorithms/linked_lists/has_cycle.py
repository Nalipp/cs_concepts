class Node(object):
    def __init__(self, value):
        self.value = value
        self.nextnode = None


def cycle_check(l): 
    s = l
    f = l

    while f.nextnode and f.nextnode.nextnode:
        s = s.nextnode
        f = f.nextnode.nextnode

        if s == f:
            return True

    return False

a = Node(1)
b = Node(2)
c = Node(3)

a.nextnode = b
b.nextnode = c
c.nextnode = a # Cycle Here!


# CREATE NON CYCLE LIST
x = Node(1)
y = Node(2)
z = Node(3)

x.nextnode = y
y.nextnode = z

print(cycle_check(a)) # => True
print(cycle_check(x)) # => False

