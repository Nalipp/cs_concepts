def first_uniq_char(s):
    counts = {}

    for char in s:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1


    for i in range(len(s)):
        char = s[i]

        if counts[char] == 1:
            return i

    return ''

print(first_uniq_char('leetcode')) # => 0
print(first_uniq_char('loveleetcode')) # => 2


