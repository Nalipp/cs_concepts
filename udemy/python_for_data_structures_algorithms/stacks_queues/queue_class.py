class Queue(object):
    def __init__(self):
        self.queue = []

    def enqueue(self, val):
        self.queue.insert(0, val)

    def dequeue(self):
        return self.queue.pop()

    def is_empty(self):
        return self.queue == []

    def size(self):
        return len(self.queue)


q1 = Queue()

print(q1.is_empty())
q1.enqueue(10)
q1.enqueue(2)
q1.enqueue(9)
q1.enqueue(32)
print(q1.size())
print(q1.dequeue())
print(q1.size())



    

