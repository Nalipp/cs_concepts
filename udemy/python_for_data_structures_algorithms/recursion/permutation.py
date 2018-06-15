def permute(str):
    if len(str) <= 1:
        return [str]

    results = []

    for i in range(len(str)):
        char = str[i]

        for perm in permute(str[:i] + str[i + 1:]):
            results.append(char + perm)


    return results


            

print(permute('a')) # => ['ab', 'ba']
print(permute('ab')) # => ['ab', 'ba']
print(permute('abc')) # => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
print(permute('abcd')) # => ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'] 

