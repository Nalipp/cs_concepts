def to_arr(str):
    if not str:
        return []

    result = []

    result = [str[-1]] + to_arr(str[0:-1])

    return result


print(to_arr('happy'))


# def permute(str):
#     if not str:
#         return []

# print(permute('abc')) # => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
# print(permute('dog')) # => ['dog', 'dgo', 'odg', 'ogd', 'gdo', 'god']
