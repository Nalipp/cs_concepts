def insertion_sort(list):

    def pair_swap(key, last):
        if key == 0 or list[key] > list[last]:
            return

        temp = list[last]
        list[last] = list[key]
        list[key] = temp

        pair_swap(key - 1, last - 1)


    for i in range(1, len(list)):
        if list[i] < list[i - 1]:
            pair_swap(i, i - 1)

    return list
        



print(insertion_sort([5, 2, 4, 6, 1, 3])) # [1, 2, 3, 4, 5, 6]
