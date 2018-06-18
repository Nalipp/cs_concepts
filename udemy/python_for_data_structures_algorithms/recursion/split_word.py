def word_split(phrase, targets, res = None):
    if not res:
        res = []

    for word in targets:
        if phrase.startswith(word):
            res.append(word)
            return word_split(phrase[len(word):], targets, res)

    return res


print(word_split('themanran',['the','ran','man'])) # => ['the', 'man', 'ran']
print(word_split('ilovedogsJohn',['i','am','a','dogs','lover','love','John'])) # => ['i', 'love', 'dogs', 'John']
print(word_split('themanran',['clown','ran','man'])) # => []
