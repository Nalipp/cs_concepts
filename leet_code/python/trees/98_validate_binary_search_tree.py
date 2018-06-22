
class Node(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None



class Solution(object):
    def isValidBST(self, node, min = -float('inf'), max = float('inf')):
        if not node:
            return True

        if node.val >= max:
            return False

        if node.val <= min:
            return False

        left = self.isValidBST(node.left, min, node.val)
        right = self.isValidBST(node.right, node.val, max)

        return left and right





n1 = Node(5)
n1.left = Node(1)
n1.right = Node(7)
n1.right.left = Node(6)
n1.right.right = Node(8)

s = Solution()
print(s.isValidBST(n1))

n1 = Node(5)
n1.left = Node(1)
n1.right = Node(4)

s = Solution()
print(s.isValidBST(n1))
