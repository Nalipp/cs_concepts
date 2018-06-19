
def calculate_salary(obj):
    if 'salary' in obj:
        return obj['salary']

    sum = 0

    for k, v in obj.items():
        if type(v) == list:
            for sub in v:
                sum += calculate_salary(sub)
        else:
            sum += calculate_salary(v)

    return sum
        

company = {
  'sales': [{'name': 'John', 'salary': 1000}, {'name': 'Alice', 'salary': 600 }],
  'development': {
    'sites': [{'name': 'Peter', 'salary': 2000}, {'name': 'Alex', 'salary': 1800 }],
    'internals': [{'name': 'Jack', 'salary': 1300}]
  }
}

print(calculate_salary(company))
