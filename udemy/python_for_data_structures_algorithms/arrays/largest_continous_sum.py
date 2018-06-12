def large_cont_sum1(arr):
    max_sum = 0

    for i in range(len(arr) - 1):
        first = arr[i]
        cur_sum = first
        
        for j in range(i + 1, len(arr)):
            sec = arr[j]

            if sec > max_sum:
                max_sum = sec

            cur_sum += sec

            if cur_sum > max_sum:
                max_sum = cur_sum

    return max_sum



def large_cont_sum2(arr):
    if len(arr) == 2:
        return max(arr[0], arr[1])

    def inner(arr):
        if len(arr) < 2:
            return 0

        return max(arr[0] + large_cont_sum2(arr[1:]), large_cont_sum2(arr[2:]))

    return inner(arr)



# print(large_cont_sum1([1,2,-1,3,4,-1])) # => 9
# print(large_cont_sum1([1,2,-1,3,4,10,10,-10,-1])) # => 29
# print(large_cont_sum1([-1,1])) # => 1

print(large_cont_sum2([1,2,-1,3,4,-1])) # => 9
print(large_cont_sum2([1,2,-1,3,4,10,10,-10,-1])) # => 29
print(large_cont_sum2([-1,1])) # => 1

