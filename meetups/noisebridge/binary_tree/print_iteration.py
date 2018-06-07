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
    queue = [node]

    while len(queue):
        cur = queue.pop(0)

        print(cur.val)

        if cur.left:
            queue.append(cur.left)

        if cur.right:
            queue.append(cur.right)


print_tree(n1)
