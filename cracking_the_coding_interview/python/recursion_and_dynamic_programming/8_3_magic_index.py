def find_magic_index(li, target, min=None, max=None, mid=None):
    if not min:
        min = 0

    if not max:
        max = len(li)

    if not mid:
        mid = int(len(li) / 2)

    if min > max:
        return -1

    if target == li[mid]:
        return mid

    if target > li[mid]:
        min = mid
    else:
        max = mid

    mid = min + int((max - mid) / 2)

    return find_magic_index(li, target, min, max, mid)
            
        

li = [3, 6, 7, 9, 12, 22, 34, 56, 99]

# print(find_magic_index(li, 1)) # True
# print(find_magic_index(li, 3)) # True
print(find_magic_index(li, 4)) # True
# print(find_magic_index(li, 6)) # True
# print(find_magic_index(li, 7)) # True
# print(find_magic_index(li, 1)) # True
# print(find_magic_index(li, 1)) # True
# print(find_magic_index(li, 1)) # True
# print(find_magic_index(li, 1)) # True

