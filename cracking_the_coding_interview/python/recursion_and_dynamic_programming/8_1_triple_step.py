def tripple_step(n, memo = {}):
    if n == 0:
        return 1

    if n < 0:
        return 0

    key1 = (n - 1)
    key2 = (n - 2)
    key3 = (n - 3)

    if key1 in memo:
        n1 = memo[key1]
    else:
        n1 = memo[key1] = tripple_step(n - 1, memo)

    if key2 in memo:
        n2 = memo[key2]
    else:
        n2 = memo[key2] = tripple_step(n - 2, memo)

    if key2 in memo:
        n2 = memo[key2]
    else:
        n2 = memo[key2] = tripple_step(n - 2, memo)

    return n1 + n2

print(tripple_step(2))
print(tripple_step(3))


