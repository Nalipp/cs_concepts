class Solution(object):
    def longestIncreasingPath(self, matrix):
        if not matrix:
            return 0

        height = len(matrix) - 1
        width = len(matrix[0]) - 1
        memo = {}

        def inner(i, j, prev):
            if j > width or j < 0:
                return 0

            if i > height or i < 0:
                return 0

            cur = matrix[i][j]

            if cur <= prev:
                return 0

            m_right = (i, j + 1)
            if m_right in memo:
                right = memo[m_right]
            else:
                right = memo[m_right] = 1 + inner(i, j + 1, cur)

            m_down = (i + 1, j)
            if m_down in memo:
                down = memo[m_down]
            else:
                down = memo[m_down] = 1 + inner(i + 1, j, cur)

            m_left = (i, j - 1)
            if m_left in memo:
                left = memo[m_left]
            else:
                left = memo[m_left] = 1 + inner(i, j - 1, cur)

            m_up = (i - 1, j)
            if m_up in memo:
                up = memo[m_up]
            else:
                up = memo[m_up] = 1 + inner(i - 1, j, cur)

            return max(right, down, left, up)

        max_seen = 0

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                max_seen = max(max_seen, inner(i, j, -float('inf')))

        return max_seen


s = Solution()

nums2 = [
  [9,4,5],
  [3,2,6],
  [2,2,7]
] 

print(s.longestIncreasingPath(nums2)) # => 4 [3, 4, 5, 6]

# nums = [
#     [0,1,2,3,4,5],
#     [11,10,9,8,7,6],
#     [12,13,14,15,16,17],
#     [23,22,21,20,19,18],
#     [24,25,26,27,28,29],
#     [35,34,33,32,31,30],
#     [36,37,38,39,40,41],
#     [47,46,45,44,43,42],
# ]

# print(s.longestIncreasingPath(nums)) # => 
# nums = [
#     [0,1,2,3,4,5,6,7,8,9],
#     [19,18,17,16,15,14,13,12,11,10],
#     [20,21,22,23,24,25,26,27,28,29],
#     [39,38,37,36,35,34,33,32,31,30],
#     [40,41,42,43,44,45,46,47,48,49],
#     [59,58,57,56,55,54,53,52,51,50],
#     [60,61,62,63,64,65,66,67,68,69],
#     [79,78,77,76,75,74,73,72,71,70],
#     [80,81,82,83,84,85,86,87,88,89],
#     [99,98,97,96,95,94,93,92,91,90],
#     [100,101,102,103,104,105,106,107,108,109],
#     [119,118,117,116,115,114,113,112,111,110],
#     [120,121,122,123,124,125,126,127,128,129],
#     [139,138,137,136,135,134,133,132,131,130],
#     [0,0,0,0,0,0,0,0,0,0]
# ]

# print(s.longestIncreasingPath(nums)) # => 5 [1, 2, 6, 8, 9]

nums1 = [
  [5,4,3],
  [6,9,2],
  [7,8,1]
] 

print(s.longestIncreasingPath(nums1)) # => 5 [1, 2, 6, 8, 9]

