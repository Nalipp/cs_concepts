def node(val):
    return {
        'val': val,
        'next': None
    }

list = node(1)
list['next'] = node(2)
list['next']['next'] = node(3)
list['next']['next']['next'] = node(4)


def sum_values(obj):
    if obj == None:
        return 0 

    return sum_values(obj['next']) + obj['val']


print(sum_values(list))
