def uni_char1(s):
    return len(set(s)) == len(s)


def uni_char2(s):
    counts = set()

    for char in s:
        if char in counts:
            return False

        counts.add(char)

    return True


print(uni_char1('')) # => True
print(uni_char1('goo')) # => False
print(uni_char1('abcdefg')) # => True

# print(uni_char2('')) # => True
# print(uni_char2('goo')) # => False
# print(uni_char2('abcdefg')) # => True
