class Solution(object):
    def maxSubArray(self, nums):
        if not nums:
            return 0

        take = nums[0] + self.maxSubArray(nums[1:])
        skip = self.maxSubArray(nums[1:])

        return skip
        # return max(take, skip);



s = Solution()
print(s.maxSubArray([1, -1, 1, 1])) # 5
# print(s.maxSubArray([-2,4,-3,4])) # 5
# print(s.maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) # 6

