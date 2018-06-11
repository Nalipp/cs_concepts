var obj = {
}

function search(str, trie) {
  var root = trie;

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (root[cur]) {
      root = root[cur];
    } else {
      return false;
    }
  }

  return root.end === true;
}

function insert(str, trie) {
  var root = trie;

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (!root[cur]) {
      root[cur] = {}
    }

    if (i === str.length - 1) {
      root[cur].end = true;
    }

    root = root[cur]
  }

  return trie
}

insert('cat', obj)
insert('bat', obj)
insert('rat', obj)

var sentence = 'the cattle was rattled by the battery';
var words = sentence.split(' ');

console.log(search('cat', obj)); 
