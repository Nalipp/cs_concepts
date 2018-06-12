def sum_up(nums):
    if len(nums) < 1:
        return 0

    return max(nums[0] + sum_up(nums[1:]), sum_up(nums[2:])) 

print(sum_up([1,2,-1,3,4,10,10,-10,-1])) # => 29
print(sum_up([3,2,5,3])) # => 13
print(sum_up([1,2,-1,3,4,-1])) # => 9
print(sum_up([-1,1])) # => 1
