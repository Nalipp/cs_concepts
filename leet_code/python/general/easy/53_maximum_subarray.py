def max_sub_array(nums):
    cur_sum = max_sum = nums[0]

    for i in range(1, len(nums)):
        cur_sum = max(cur_sum + nums[i], nums[i])
        max_sum = max(cur_sum, max_sum)

    return max_sum


print(max_sub_array([-2,1,-3,4,-1,2,1,-5,4])) # => 6 ([4, -1, 2, 1])
print(max_sub_array([2,-1,7,-2,-3])) # => 8
print(max_sub_array([-2,-1,4,7])) # => 11 
print(max_sub_array([-2,1,-1])) # => 1 
