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



def has_target(node, target, results=[]):

    if not node.c:
        return []
    
    if node.v == target:
        return [node]

    for child in node.c:
        results.append(node)
        has_target(child, target, results)

    return results


for child in has_target(n1, 7):
    print(child.v)

# print('-----')

# for child in has_target(n1, 7):
#     print(child.v)



