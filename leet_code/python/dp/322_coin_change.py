class Solution(object):
    def coinChange(self, coins, amount):

        def inner(coins, amount):
            if not coins or amount < 0:
                return float('inf')

            if amount == 0:
                return 0

            take = 1 + inner(coins, amount - coins[0])
            skip = inner(coins[1:], amount)

            return min(take, skip)

        res = inner(coins, amount)
        return -1 if res == float('inf') else res

s = Solution()
print(s.coinChange([1, 2, 5], 11)) # => 3 
print(s.coinChange([3, 2, 4], 11)) # => 3
print(s.coinChange([2], 3)) # => -1
print(s.coinChange([1], 0)) # => 0
print(s.coinChange([2,5,10,1], 27)) # => 4
print(s.coinChange([186,419,83,408], 6249)) # => 20
# print(s.coinChange([288,160,10,249,40,77,314,429], 9208)) # => 22 

        # idx = 0
        # memo = {}

        # def helper(coins, rem, idx):
        #     key = (idx, rem)

        #     if key in memo:
        #         return memo[key]

        #     if rem == 0:
        #         memo[key] = 0
        #         return 0

        #     if idx == len(coins) or rem < 0:
        #         memo[key] = float('inf')
        #         return memo[key]

        #     cur = 1 + helper(coins, rem - coins[idx], idx)
        #     nxt = helper(coins, rem, idx + 1)

        #     memo[key] = min(cur, nxt)
        #     return memo[key]

        # res = helper(coins, amount, idx) 
        # return -1 if res == float('inf') else res
