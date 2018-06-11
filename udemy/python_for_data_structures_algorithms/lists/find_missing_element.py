def finder1(arr1, arr2):
    counts = {}

    for num in arr2:
        if counts.get(num) != None:
            counts[num] += 1
        else:
            counts[num] = 1

    for num in arr1:
        if counts.get(num) == None or counts.get(num) == 0:
            return num
        else:
            counts[num] -= 1

    return None


def finder2(arr1, arr2):
    sum = 0

    for num in arr1:
        sum += num

    for num in arr2:
        sum -= num

    return sum


def finder3(arr1, arr2):
    result = 0

    for num in arr1 + arr2:
        result^=num

    return result


# print(finder1([1,2,3,4,5,6,7,5],[3,7,2,1,4,6,5])) # => 5
# print(finder2([1,2,3,4,5,6,7],[3,7,2,1,4,6])) # => 5
print(finder3([1,2,3,4,5,5,6,7],[3,7,2,1,4,6,5])) # => 5
