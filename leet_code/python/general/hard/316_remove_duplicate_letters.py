def remove_duplicate_letters(s):
    return set(s)


print(remove_duplicate_letters("bcabc")) # => "abc"
print(remove_duplicate_letters("cbacdcbc")) # => "acdb"
