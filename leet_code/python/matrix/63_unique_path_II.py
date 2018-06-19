class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
        memo = {}
        n = len(obstacleGrid[0]) - 1
        m = len(obstacleGrid) - 1

        def helper(i, j):
            if i > m or j > n:
                return 0

            if obstacleGrid[i][j] == 1:
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


        return helper(0, 0)

s = Solution()
grid2 = [[0,0]]

print(s.uniquePathsWithObstacles(grid2)) # => 0

grid1 = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
print(s.uniquePathsWithObstacles(grid1)) # => 2


