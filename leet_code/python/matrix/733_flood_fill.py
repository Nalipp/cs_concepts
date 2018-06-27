class Solution(object):
    def floodFill(self, image, sr, sc, newColor):
        originalColor = image[sr][sc]
        if originalColor == newColor:
            return image

        def inner(i, j):
            image[i][j] = newColor

            if i - 1 >= 0 and image[i - 1][j] == originalColor:
                inner(i - 1, j)
            if j + 1 < len(image[0]) and image[i][j + 1] == originalColor:
                inner(i, j + 1)
            if i + 1 < len(image) and image[i + 1][j] == originalColor:
                inner(i + 1, j)
            if j - 1 >= 0 and image[i][j - 1] == originalColor:
                inner(i, j - 1)

            return image

        return inner(sr, sc)

s = Solution

# image = [[0,0,0],[0,1,1]]
# print(s.floodFill(s, image, 1, 1, 1))

# image = [[0,0,0],[1,0,0]]
# print(s.floodFill(s, image, 1, 0, 2))

# image = [[1,1,1],[1,1,0],[1,0,1]]
# sr = 1
# sc = 1
# newColor = 2
# print(s.floodFill(s, image, sr, sc, newColor))
# # Output: [[2,2,2],[2,2,0],[2,0,1]]
