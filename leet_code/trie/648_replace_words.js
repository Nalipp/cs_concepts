var replaceWords = function(dict, sentence) {
  var trie = {};
  var words = sentence.split(' ');

  for (var ele of dict) {
    insert(ele, trie);
  }
  
  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    console.log('word', word); 

    for (var j = 0; j < word.length; j += 1) {
      var chunk = word.slice(0, j + 1);
      console.log('chunk', chunk); 

      if (search(chunk, trie)) {
        words[i] = chunk;
        break;
      }
    }
  }

  return words.join(' ');
};

function search(str, trie) {
  var root = trie;

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (root[cur]) {
      if (root.end === str) {
        return true;
      }

      root = root[cur];
    } else {

      return false;
    }
  }

  return root.end === str;
}

function insert(str, trie) {
  var root = trie;

  for (var i = 0; i < str.length; i += 1) {
    var cur = str[i];

    if (!root[cur]) {
      root[cur] = {}
    }

    if (i === str.length - 1) {
      root[cur].end = str;
    }

    root = root[cur]
  }

  return trie
}

