
def insertion_sort(list):
    for i in range(1, len(list)):

        while i > 0: 
            key = list[i]
            prev = list[i - 1]

            if key < prev:
                list[i - 1] = key
                list[i] = prev

            i -= 1

    return list


print(insertion_sort([5, 2, 4, 6, 1, 3])) # [1, 2, 3, 4, 5, 6]
print(insertion_sort([3, 7, 1, 9, 4, 2, 8])) # []
