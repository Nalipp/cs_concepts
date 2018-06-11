def pair_sum1(arr, target):
    results = []

    for i in range(len(arr) - 1):
        num1 = arr[i]

        for j in range(i + 1, len(arr)):
            num2 = arr[j]

            if num1 + num2 == target:
                results.append([num1, num2])

    return results


def pair_sum2(arr, target):
    results = []
    counts = {}

    for i in range(len(arr)):
        counts[arr[i]] = True

    for num in arr:
        pair = target - num

        if pair in counts:
            results.append([num, pair])

    return results


def pair_sum3(arr, target):
    results = []
    counts = {}

    for i in range(len(arr)):
        counts[arr[i]] = True

    for num in arr:
        pair = target - num

        if num in counts and pair in counts:
            results.append([num, pair])

            del counts[num]
            del counts[pair]

    return results


def pair_sum4(arr, target):
    results = []
    counts = {}

    for i in range(len(arr)):
        char = arr[i]

        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1

    for num in arr:
        pair = target - num

        if num == target / 2:
            if num in counts:
                if counts[num] >= 2:
                    results.append([num, num])
                    counts[num] -= 2

        elif num in counts and pair in counts:
            results.append([num, pair])

            counts[num] -= 1
            counts[pair] -= 1

            if counts[num] == 0: 
                del counts[num]
            elif counts[pair] == 0:
                del counts[pair]


    return results


def pair_sum5(arr, target):
    
    if len(arr) < 2:
        return
    
    seen = set()
    output = set()
    
    for num in arr:
        match = target - num
        
        if match not in seen:
            seen.add(num)
        
        else:
            output.add( (min(num, match),  max(num, match)) )

    return output



# ************************************************************

# print(pair_sum1([1, 3, 2, 4, 0, 5], 5)) # => [[1, 4], [3, 2], [0, 5]]
# print(pair_sum2([1, 3, 2, 4, 0, 5], 5)) # => [[1, 4], [3, 2], [2, 3], [4, 1], [0, 5], [5, 0]]
# print(pair_sum3([1, 3, 2, 4, 0, 5], 5)) # => [[1, 4], [3, 2], [0, 5]]
# print(pair_sum4([1, 3, 2, 4, 0, 3, 5, 6], 6)) # => [[1, 5], [3, 3], [2, 4], [0, 6]]
# print(pair_sum4([1, 3, 2, 4, 0, 5, 6], 6)) # => [[1, 5], [2, 4], [0, 6]]
print(pair_sum5([1, 3, 2, 4, 0, 3, 5, 6], 6)) # => [[1, 5], [3, 3], [2, 4], [0, 6]]
print(pair_sum5([1, 3, 2, 4, 0, 5, 6], 6)) # => [[1, 5], [2, 4], [0, 6]]
