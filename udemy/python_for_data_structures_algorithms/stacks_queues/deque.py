class Deque(object):
    def __init__(self):
        self.items = []

    def insert_front(self, val):
        self.items.append(val)

    def insert_back(self, val):
        self.items.insert(0, val)

    def remove_front(self):
        return self.items.pop()

    def remove_back(self):
        return self.items.pop(0)

    def size(self):
        return len(self.items)

    def is_empty(self):
        return self.items == []

d = Deque()

d.insert_front(10)
d.insert_front(20)
d.insert_back(30)
print(d.remove_back())
print(d.remove_back())
print(d.remove_back())
print(d.size())
