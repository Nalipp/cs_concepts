def large_cont_sum1(arr):
    if len(arr) == 0:
        return 0

    max_sum = cur_sum = arr[0]

    for num in arr[1:]:

        if (cur_sum + num) < 0:
            cur_sum = 0
        else:
            cur_sum += num

            if cur_sum > max_sum:
                max_sum = cur_sum

    return max_sum


def large_cont_sum2(arr):
    if len(arr) == 0:
        return 0

    max_sum = cur_sum = arr[0]

    for num in arr[1:]:
        cur_sum = max(cur_sum + num, num)
        max_sum = max(cur_sum, max_sum)

    return max_sum





# print(large_cont_sum1([1,2,-1,3,4,-1])) # => 9
# print(large_cont_sum1([1,2,-1,3,4,10,10,-10,-1,-10,-10,-10,10])) # => 29
# print(large_cont_sum1([-1,1])) # => 1
# print(large_cont_sum1([-1,-2,-1,-3,-4,-1])) # => 0

print(large_cont_sum2([1,2,-1,3,4,-1])) # => 9
print(large_cont_sum2([1,2,-1,3,4,10,10,-10,-1,-10,-10,-10,10])) # => 29
print(large_cont_sum2([-1,1])) # => 1
print(large_cont_sum2([-1,-2,-1,-3,-4,-1])) # => -1


