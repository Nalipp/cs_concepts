def is_balanced(str):
    stack = []
    lookup = {
            ']' : '[',
            '}' : '{',
            ')' : '(',
            }

    for char in str:
        if char in lookup:
            if stack[-1] == lookup[char]:
                stack.pop()
            else:
                return False
        else:
            stack.append(char)

    return len(stack) == 0

    
print(is_balanced('[[[]]]')) # => True
print(is_balanced('[[[]])]')) # => False
print(is_balanced('[](){([[[]]])}(')) # => False
print(is_balanced('[{{{(())}}}]((()))')) # => True
