class Solution(object):
    def findUnsortedSubarray(self, nums):
        count = len(nums)
        original = nums[0:]
        nums.sort()

        i = 0
        j = len(nums) - 1

        while nums[i] == original[i] and i < len(nums) - 1:
            count -= 1

            i += 1

        while nums[j] == original[j] and j >= i:
            count -= 1

            j -= 1

        return count





s = Solution()

print(s.findUnsortedSubarray([1, 3, 2, 2, 2])) # => 4 -> [3, 2, 2, 2] 
print(s.findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])) # => 5 -> [6, 4, 8, 10, 9] 
print(s.findUnsortedSubarray([2, 4, 6])) # => 0 -> [2, 4, 6] 
