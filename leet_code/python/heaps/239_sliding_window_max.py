import heapq

class Solution(object):
    def maxSlidingWindow(self, nums, k):
        if not nums: return []

        results = []

        for i in range(len(nums) - k + 1):
            start = i
            end = i + k
            window = nums[start:end]

            next = nums[end] if end < len(nums) else None
            prev = nums[start - 1] if i > 0 else None

            if not prev or prev == cur_largest:
                cur_largest = heapq.nlargest(1, nums[start:end])[0] 
                results.append(cur_largest)
            else:
                results.append(cur_largest)

            if next and next > cur_largest:
                cur_largest = next

        return results

s = Solution()

k = 0
nums2 = []
print(s.maxSlidingWindow(nums2, k)) # => [3,3,5,5,6,7]
# nums1 = [1,3,-1,-3,5,3,6,7]
# k1 = 1
# k2 = 2
# k3 = 3
# k4 = 4
# k5 = 5
# k6 = 6
# k7 = 7
# k8 = 8
# print(s.maxSlidingWindow(nums1, k1)) # => [3,3,5,5,6,7]
# print(s.maxSlidingWindow(nums1, k2)) # => [3,3,5,5,6,7]
# print(s.maxSlidingWindow(nums1, k3)) # => [3,3,5,5,6,7]
# print(s.maxSlidingWindow(nums1, k4)) # => [3,3,5,5,6,7]
# print(s.maxSlidingWindow(nums1, k5)) # => [3,3,5,5,6,7]
# print(s.maxSlidingWindow(nums1, k6)) # => [3,3,5,5,6,7]
# print(s.maxSlidingWindow(nums1, k7)) # => [3,3,5,5,6,7]
# print(s.maxSlidingWindow(nums1, k8)) # => [3,3,5,5,6,7]
# Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
# Output: [3,3,5,5,6,7] 
# Explanation: 

# Window position                Max
# ---------------               -----
# [1  3  -1] -3  5  3  6  7       3 -
#  1 [3  -1  -3] 5  3  6  7       3 -
#  1  3 [-1  -3  5] 3  6  7       5 -
#  1  3  -1 [-3  5  3] 6  7       5
#  1  3  -1  -3 [5  3  6] 7       6
#  1  3  -1  -3  5 [3  6  7]      7
