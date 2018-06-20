class Solution(object):
    def hammingDistance(self, x, y):
        count = 0
        x_binary = list("{0:b}".format(x))
        y_binary = list("{0:b}".format(y))

        while len(x_binary) > len(y_binary):
            y_binary.insert(0, '0')

        while len(y_binary) > len(x_binary):
            x_binary.insert(0, '0')

        for i in range(len(y_binary)):
            if y_binary[i] != x_binary[i]:
                count += 1

        return count

s = Solution()
print(s.hammingDistance(1, 4)) # => 2

