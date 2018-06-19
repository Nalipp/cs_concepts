class Solution(object):
    def uniquePaths(self, m, n):
        memo = {}

        def helper(i, j):
            if i > m or j > n:
                return 0

            if i == m and j == n:
                return 1

            cur1 = (i + 1, j)
            cur2 = (i, j + 1)

            if cur1 in memo:
                first = memo[cur1]
            else:
                first = memo[cur1] = helper(i + 1, j)

            if cur2 in memo:
                sec = memo[cur2]
            else:
                sec = memo[cur2] = helper(i, j + 1)


            return first + sec


        return helper(1, 1)



# m -> column
# n -> row
s = Solution()

print(s.uniquePaths(0, 0)) # => 0
print(s.uniquePaths(3, 2)) # => 3
print(s.uniquePaths(7, 3)) # => 27
print(s.uniquePaths(150, 100)) # => 28

