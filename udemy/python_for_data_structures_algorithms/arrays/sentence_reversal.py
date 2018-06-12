def rev_word(str):
    words = str.split(' ')
    results = []

    for i in range(len(words) - 1, -1, -1):
        word = words[i]

        if word != '':
            results.append(word)

    return ' '.join(results)


# print(rev_word('This is the best')) # => 'best is the This'
# print(rev_word(' space here  ')) # => 'here space'

from nose.tools import assert_equal

class ReversalTest(object):
    
    def test(self,sol):
        assert_equal(sol('    space before'),'before space')
        assert_equal(sol('space after     '),'after space')
        assert_equal(sol('   Hello John    how are you   '),'you are how John Hello')
        assert_equal(sol('1'),'1')
        print("ALL TEST CASES PASSED")
        
# Run and test
t = ReversalTest()
t.test(rev_word)
