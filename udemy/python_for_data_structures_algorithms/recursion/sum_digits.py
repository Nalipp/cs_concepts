def sum_digits(num):
    if num < 10:
        return num

    return num % 10 + (sum_digits(int(num / 10)))


print(sum_digits(6543210))
# n = 4321, return 4+3+2+1

