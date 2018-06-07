class Node:
    def __init__(self, v):
        self.val = v
        self.left = None
        self.right = None


n1 = Node(12)
n1.left = Node(8)
n1.right = Node(14)
n1.right.left = Node(13)
n1.left.left = Node(4)
n1.left.right = Node(10)
n1.left.right.left = Node(9)
n1.left.left.left = Node(2)
n1.left.left.right = Node(5)

def print_tree(node):
    if not node:
        return

    print_tree(node.left)
    print(node.val)
    print_tree(node.right)


print_tree(n1)
