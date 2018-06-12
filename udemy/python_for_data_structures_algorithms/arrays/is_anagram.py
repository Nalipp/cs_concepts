def is_anagram1(str1, str2):
    str1 = str1.replace(' ', '').lower()
    str2 = str2.replace(' ', '').lower()

    return sorted(str1) == sorted(str2)


def is_anagram2(str1, str2):
    str1 = str1.replace(' ', '').lower()
    str2 = str2.replace(' ', '').lower()

    if len(str1) != len(str2): return False

    for i in range(len(str1)):
        if str1[i] not in str2:
            return False

    return True


def is_anagram3(str1, str2):
    str1 = str1.replace(' ', '').lower()
    str2 = str2.replace(' ', '').lower()

    counts = {}

    if len(str1) != len(str2): return False

    for i in range(len(str1)):
        char = str1[i]

        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1


    for i in range(len(str2)):
        char = str2[i]

        if char not in counts or counts[char] == 0:
            return False
        else:
            counts[char] -= 1

    return True


def is_anagram4(str1, str2):
    str1 = str1.replace(' ', '').lower()
    str2 = str2.replace(' ', '').lower()

    counts = {}

    if len(str1) != len(str2): return False

    for i in range(len(str1)):
        char = str1[i]

        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1

    for i in range(len(str2)):
        char = str2[i]

        if char in counts:
            counts[char] -= 1
        else:
            counts[char] = 1

    for k in counts:
        if counts[k] != 0:
            return False

    return True

    

# ***************************************************************************

# print(is_anagram1('d o g', 'God')) # => True
# print(is_anagram1('d o g!', 'God')) # => False
# print(is_anagram1('public relations', 'Crap Built On Lies')) # => True

# print(is_anagram2('d o g', 'God')) # => True
# print(is_anagram2('d o g!', 'God')) # => False
# print(is_anagram2('public relations', 'Crap Built On Lies')) # => True

# print(is_anagram3('d o g', 'God')) # => True
# print(is_anagram3('d o g!', 'God')) # => False
# print(is_anagram3('public relations', 'Crap Built On Lies')) # => True

# print(is_anagram4('d o g', 'God')) # => True
# print(is_anagram4('d o g!', 'God')) # => False
# print(is_anagram4('public relations', 'Crap Built On Lies')) # => True

from nose.tools import assert_equal

class AnagramTest(object):
    
    def test(self,sol):
        assert_equal(sol('go go go','gggooo'),True)
        assert_equal(sol('abc','cba'),True)
        assert_equal(sol('hi man','hi     man'),True)
        assert_equal(sol('aabbcc','aabbc'),False)
        assert_equal(sol('123','1 2'),False)
        print("ALL TEST CASES PASSED")

# Run Tests
t = AnagramTest()
t.test(is_anagram1)
