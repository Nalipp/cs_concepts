class Solution(object):
    def validPalindrome(self, s):
        skipped = False
        mid = int(len(s) / 2)
        cur_i = mid

        cur_j = mid if len(s) % 2 == 0 else mid + 1

        next_i = cur_i -= 1
        next_c = cur_c += 1


s = Solution()

# print(s.validPalindrome('aba')) # True
print(s.validPalindrome('ixcii')) # False
# print(s.validPalindrome('aabbbbaaaabbibbaa')) # True
# print(s.validPalindrome('aabbgbbaaaabbibbaa')) # False
# print(s.validPalindrome("ebcbbececabbacecbbcbe")) # True
print(s.validPalindrome("abca")) # True



# counts = {}
# muligan = False

# for char in s:
#     if char in counts:
#         counts[char] += 1
#     else:
#         counts[char] = 1

# for k, v in counts.items():
#     if v % 2 != 0:
#         if muligan:
#             return False
#         else:
#             muligan = True

# return True
