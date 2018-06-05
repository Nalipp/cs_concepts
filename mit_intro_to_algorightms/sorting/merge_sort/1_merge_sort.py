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


def merge_sort(list):
    print(list)

    mid = int(len(list) / 2)

    first = list[0:mid]
    sec = list[mid:]

    if (len(first) == 1):
        return list

    return merge_two_sorted_lists(merge_sort(first), merge_sort(sec))


print(merge_sort([3, 1, 6, 2, 8, 4, 9, 0]))



