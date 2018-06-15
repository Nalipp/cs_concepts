def sum(num):
    if num < 1:
        return 0

    return num + sum(num - 1)

print(sum(4)) # => 10

