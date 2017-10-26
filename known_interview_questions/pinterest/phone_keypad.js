// Given a phone keypad ranging 1 through 9 where digits map to different letters
// ex: {1: [], 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'] ... 0: []}
// and given a number of any length
// output all combinations of letters that could come from the input number
// for example:
// if the input is '23'
// output should be ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
// or if the input is '246'
// output should be ['agm', 'agn', 'ago', 'ahm', 'ahn', 'aho', 'aim', 'ain', 'aio', 'bgm', 'bgn', 'bgo', 'bhm', 'bhn', 'bho', 'bim', 'bin', 'bio', 'cgm', 'cgn', 'cgo', 'chm', 'chn', 'cho', 'cim', 'cin', 'cio']

let obj =  {
  1: [], 
  2: ['a', 'b', 'c'], 
  3: ['d', 'e', 'f'], 
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: []}

let findCombos = (num, obj) => {

  
}

console.log(findCombos('23', obj)); 

// 'a', 'b', 'c', 'd', 'e', 'f'

// find all two char combos

// a, b
// a, c
// a, d
// a, e
// a, f
// b, c
// b, d
// b, e
// b, f
// c

