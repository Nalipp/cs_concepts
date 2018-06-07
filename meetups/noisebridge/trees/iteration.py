class Node:
    def __init__(self, v):
        self.v = v
        self.c = []

n1 = Node(10)
n1.c.append(Node(5))
n1.c.append(Node(7))
n1.c.append(Node(2))

n1.c[0].c.append(Node(12))
n1.c[0].c.append(Node(4))

n1.c[0].c[1].c.append(Node(3))

n1.c[1].c.append(Node(8))


def print_all(node):
    print(node.v)

    if not node.c:
        return

    for child in node.c:
        print_all(child)


print_all(n1)


