class Queue2Stacks(object):
    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def enqueue(self, val):
        self.in_stack.append(val)

    def dequeue(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())

        if self.out_stack:
            return self.out_stack.pop()
        else:
            raise Exception('can not dequeue from empty queue')


    def peek(self):
        if self.empty():
            return ''
        
        if self.out_stack:
            return self.out_stack[-1]
        
        if self.in_stack:
            return self.in_stack[0]
        

    def empty(self):
        return not self.in_stack and not self.out_stack


    def print_stacks(self):
        print('-------------')
        print('in_stack :', self.in_stack)
        print('out_stack :', self.out_stack)
        print('-------------')


q = Queue2Stacks()

q.enqueue(1)           
q.enqueue(2)
q.enqueue(3)

q.print_stacks()

print(q.peek())
