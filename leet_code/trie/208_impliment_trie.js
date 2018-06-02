var Trie = function() {
  this.trie = {}   
};

Trie.prototype.insert = function(word) {
  var root = this.trie;

  for (var i = 0; i < word.length; i += 1) {
    var cur = word[i];

    if (!root[cur]) {
      root[cur] = {}
    }

    if (i === word.length - 1) {
      root[cur].end = true;
    }

    root = root[cur]
  }

  return trie
};

Trie.prototype.search = function(word) {
  var root = this.trie;

  for (var i = 0; i < word.length; i += 1) {
    var cur = word[i];

    if (root[cur]) {
      root = root[cur];
    } else {
      return false;
    }
  }

  return root.end === true;
};

Trie.prototype.startsWith = function(prefix) {
  var root = this.trie;

  for (var i = 0; i < prefix.length; i += 1) {
    var char = prefix[i];

    if (root[char]) {
      root = root[char];
    } else {
      return false;
    }
  }

  return true;
};

trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");   
console.log(trie.search("app"));     // returns true
