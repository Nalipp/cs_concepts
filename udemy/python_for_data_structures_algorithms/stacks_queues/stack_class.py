class Stack(object):
    def __init__(self):
        self.items = []

    def push(self, val):
        self.items.append(val) 
        
    def pop(self):
        return self.items.pop()

    def is_empty(self):
        return self.items == []

    def peek(self):
        return self.items[(len(self.items) - 1)]

    def size(self):
        return len(self.items)



s1 = Stack()
s1.push(10)
s1.push(3)
s1.push(True)


print(s1.pop())
print(s1.is_empty())
print(s1.size())
print(s1.peek())
