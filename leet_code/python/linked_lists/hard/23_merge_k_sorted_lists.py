class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        counts = {};
        results = []

        for l in lists:
            while l:
                if l.val in counts:
                    counts[l.val] += 1
                else:
                    counts[l.val] = 1

                l = l.next

        for k, v in counts.items():
            results.append([k, v])


        return self.buildNewList(results)


    def buildNewList(self, arr):
        arr.sort()
        
        if not arr:
            return None

        last = arr[len(arr) - 1][0]

        tail = ListNode(last)

        if arr[len(arr) - 1][1] == 1:
            i = len(arr) - 2
        else:
            arr[len(arr) - 1][1] -= 1
            i = len(arr) - 1

        for i in range(i, -1, -1):
            sub = arr[i]

            cur_val = sub[0]
            count = sub[1]

            while count:
                n = ListNode(cur_val)
                n.next = tail
                tail = n
                count -= 1

        return tail


def print_list(l):
    while l:
        print(l.val)
        l = l.next

l1 = ListNode(1)
l1.next = ListNode(4)
l1.next.next = ListNode(5)

l2 = ListNode(1)
l2.next = ListNode(3)
l2.next.next = ListNode(4)

l3 = ListNode(2)
l3.next = ListNode(6)

lists = [l1, l2, l3]

s = Solution()
print_list(s.mergeKLists(lists));

# Input:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6
