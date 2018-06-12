def compress(s):
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


print(compress('')) # => ''
print(compress('A')) # => 'A1'
print(compress('AABBCC')) # => 'A2B2C2' 
print(compress('AABBCCD')) # => 'A2B2C2D1' 
print(compress('AAABCCDDDDD')) # => 'A3B1C2D5'

