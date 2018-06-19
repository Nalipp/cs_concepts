def fibonacci(n):
    if n == 1:
        return [1]

    if n == 2:
        return [1, 1]

    results = [n]

    return results + fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(5))

