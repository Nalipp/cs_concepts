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

def find_path(node, target, results=[]):
    if not node:
        return False

    if node.val == target or find_path(node.left, target, results) or find_path(node.right, target, results):

        results.append(node.val)
        return results

    return False

    
result1 = find_path(n1, 5)
# result1.reverse()
print(result1)

print(results)


# result2 = find_path(n1, 13)
# # result2.reverse()
# print(result2)



