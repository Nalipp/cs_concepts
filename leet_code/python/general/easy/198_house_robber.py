def rob(nums):

    if len(nums) < 1:
        return 0

    first = nums[0] + rob(nums[2:])
    sec = nums[0] + rob(nums[3:])

    return max(first, sec)


print(rob([1,2,3,1])) # 4
print(rob([2,7,9,3,1])) # 12

