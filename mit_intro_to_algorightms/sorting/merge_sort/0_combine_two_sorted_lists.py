def merge_two_sorted_lists(list1, list2):
    result = []

    i = 0
    j = 0

    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            result.append(list1[i])
            i += 1

        else:
            result.append(list2[j])
            j += 1

    if i < len(list1):
        result += list1[i:]

    if j < len(list2):
        result += list1[j:]

    return result

print(merge_two_sorted_lists([4, 6, 9, 10, 12], [2, 5, 7])) # [2, 4, 5, 6, 7]




