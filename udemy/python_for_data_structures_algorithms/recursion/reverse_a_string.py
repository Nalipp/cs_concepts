def reverse_str(str):
    if not str:
        return ''

    return str[-1] + reverse_str(str[0:-1])

print(reverse_str('hello')) # => 'olleh'
print(reverse_str('hello world')) # => 'dlrow olleh'
print(reverse_str('123456789')) # => '987654321'
