class Solution(object):
    def wordBreak(self, s, wordDict):
        start = 0
        for i in range(len(s) + 1):
            print(s[start:i])
            if s[start:i] in wordDict:
                if i == len(s):
                    return True
                else:
                    start = i

        return False


s = Solution()

# s1 = "leetcode"
# wordDict1 = ["leet", "code"]

# print(s.wordBreak(s1, wordDict1)) # => True
        
# s2 = "applepenapple"
# wordDict2 = ["apple", "pen"]

# print(s.wordBreak(s2, wordDict2)) # => True

# s3 = "catsandog"
# wordDict3 = ["cats", "dog", "sand", "and", "cat"]

# print(s.wordBreak(s3, wordDict3)) # => False

s4 = "aaaaaaa"
wordDict3 = ["aaaa","aaa"]

print(s.wordBreak(s4, wordDict3)) # => True

