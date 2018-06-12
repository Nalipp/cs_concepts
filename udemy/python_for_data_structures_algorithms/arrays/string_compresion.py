def compress1(s): # O(n) space
    counts = {}
    new_str = ''

    for char in s:
        if counts.get(char):
            counts[char] += 1
        else:
            counts[char] = 1

    for k, v in counts.items():
        new_str += k + str(v)

    return new_str


def compress2(s): # O(1) space
    if not s:
        return ''

    if len(s) == 1:
        return s + '1'

    new_str = ''
    cur_count = 1

    for i in range(len(s) - 1):
        cur = s[i]
        nxt = s[i + 1]

        if cur != nxt:
            new_str += (cur + str(cur_count))
            cur_count = 1
        else:
            cur_count += 1

    new_str += s[-1] + str(cur_count)

    return new_str


# print(compress1('')) # => ''
# print(compress1('A')) # => 'A1'
# print(compress1('AABBCC')) # => 'A2B2C2' 
# print(compress1('AABBCCD')) # => 'A2B2C2D1' 
# print(compress1('AAABCCDDDDD')) # => 'A3B1C2D5'

print(compress2('')) # => ''
print(compress2('A')) # => 'A1'
print(compress2('AABBCC')) # => 'A2B2C2' 
print(compress2('AABBCCD')) # => 'A2B2C2D1' 
print(compress2('AAABCCDDDDD')) # => 'A3B1C2D5'

