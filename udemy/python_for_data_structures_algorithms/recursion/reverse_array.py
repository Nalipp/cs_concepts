def reverse_arr(arr):
    if not arr:
        return []

    return [arr[-1]] + reverse_arr(arr[0:-1])

print(reverse_arr(['h', 'a', 'p', 'p', 'y'])) 
# => ['y', 'p', 'p', 'a', 'h']
print(reverse_arr(['1', '2', '3', '4', '5', '6', '7', '8', '9'])) 
# => ['9', '8', '7', '6', '5', '4', '3', '2', '1']
