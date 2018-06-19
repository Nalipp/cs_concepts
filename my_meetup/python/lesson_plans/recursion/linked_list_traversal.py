def node(val):
    return {
        'val': val,
        'next': None
    }

list = node(1)
list['next'] = node(2)
list['next']['next'] = node(3)
list['next']['next']['next'] = node(4)


def print_recursively(obj):
    if obj == None:
        return None 

    print(obj['val'])

    print_recursively(obj['next'])


print_recursively(list)
