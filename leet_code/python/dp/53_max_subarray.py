class Solution(object):
    def maxSubArray(self, nums):
        if not nums:
            return 0

        right = self.maxSubArray(nums[2:])
        left = nums[0] + self.maxSubArray(nums[1:])

        print(left, right)
        return max(left, right)


s = Solution()
print(s.maxSubArray([-2,4,-3,4])) # 5
# print(s.maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) # 6

