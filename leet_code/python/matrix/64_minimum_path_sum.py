class Solution(object):
    def minPathSum(self, grid):
        if not grid:
            return 0

        memo = {}
        i_end = len(grid) - 1
        j_end = len(grid[i_end]) - 1

        def inner(grid, i, j):
            if i > i_end or j > j_end:
                return float('inf')

            if i == i_end and j == j_end:
                return grid[i_end][j_end]

            cell = (i + 1, j)
            if cell in memo:
                down = memo[cell]
            else:
                down = memo[cell] = inner(grid, i + 1, j)

            cell = (i, j + 1)

            if cell in memo:
                right = memo[cell]
            else:
                right = memo[cell] = inner(grid, i, j + 1)

            return grid[i][j] + min(down, right)


        return inner(grid, 0, 0)


grid1 = [ 
       ]

grid2 = [ 
         [1, 3, 9], 
         [9, 5, 9],
         [4, 2, 1],
       ]

grid3 = [ 
          [1, 2],
          [5, 6],
          [1, 1]
        ]

grid4 = [
          [7,1,3,5,8,9,9,2,1,9,0,8,3,1,6,6,9,5],
          [9,5,9,4,0,4,8,8,9,5,7,3,6,6,6,9,1,6],
          [8,2,9,1,3,1,9,7,2,5,3,1,2,4,8,2,8,8],
          [6,7,9,8,4,8,3,0,4,0,9,6,6,0,0,5,1,4],
          [7,1,3,1,8,8,3,1,2,1,5,0,2,1,9,1,1,4],
          [9,5,4,3,5,6,1,3,6,4,9,7,0,8,0,3,9,9],
          [1,4,2,5,8,7,7,0,0,7,1,2,1,2,7,7,7,4],
          [3,9,7,9,5,8,9,5,6,9,8,8,0,1,4,2,8,2],
          [1,5,2,2,2,5,6,3,9,3,1,7,9,6,8,6,8,3],
          [5,7,8,3,8,8,3,9,9,8,1,9,2,5,4,7,7,7],
          [2,3,2,4,8,5,1,7,2,9,5,2,4,2,9,2,8,7],
          [0,1,6,1,1,0,0,6,5,4,3,4,3,7,9,6,1,9]
        ]

grid5 = [
          [5,0,1,1,2,1,0,1,3,6,3,0,7,3,3,3,1],[1,4,1,8,5,5,5,6,8,7,0,4,3,9,9,6,0],[2,8,3,3,1,6,1,4,9,0,9,2,3,3,3,8,4],[3,5,1,9,3,0,8,3,4,3,4,6,9,6,8,9,9],[3,0,7,4,6,6,4,6,8,8,9,3,8,3,9,3,4],[8,8,6,8,3,3,1,7,9,3,3,9,2,4,3,5,1],[7,1,0,4,7,8,4,6,4,2,1,3,7,8,3,5,4],[3,0,9,6,7,8,9,2,0,4,6,3,9,7,2,0,7],[8,0,8,2,6,4,4,0,9,3,8,4,0,4,7,0,4],[3,7,4,5,9,4,9,7,9,8,7,4,0,4,2,0,4],[5,9,0,1,9,1,5,9,5,5,3,4,6,9,8,5,6],[5,7,2,4,4,4,2,1,8,4,8,0,5,4,7,4,7],[9,5,8,6,4,4,3,9,8,1,1,8,7,7,3,6,9],[7,2,3,1,6,3,6,6,6,3,2,3,9,9,4,4,8]
        ]

s = Solution()
print(s.minPathSum(grid1))
print(s.minPathSum(grid2))
print(s.minPathSum(grid3))
print(s.minPathSum(grid4))
print(s.minPathSum(grid5))



# without memoization
# class Solution(object):
#     def minPathSum(self, grid):
#         if not grid:
#             return 0

#         def inner(i, j):
#             if j >= len(grid[0]) or i >= len(grid):
#                 return float('inf')

#             if j == len(grid[0]) - 1 and i == len(grid) - 1:
#                 return grid[i][j]

#             right = grid[i][j] + inner(i, j + 1)
#             down = grid[i][j] + inner(i + 1, j)

#             return min(right, down)

#         return inner(0, 0)
