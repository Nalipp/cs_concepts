def max_profit(nums):
    profit = 0

    for i in range(len(nums) - 1):
        first = nums[i]
        sec = nums[i + 1]

        if first < sec:
            profit += sec - first

    return profit

print(max_profit([7,1,5,3,6,4])) # => 7
print(max_profit([1,2,3,4,5])) # => 4
print(max_profit([7,6,4,3,1])) # => 0
