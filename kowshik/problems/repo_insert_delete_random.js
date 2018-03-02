class Repo {
  constructor() {
    this.idsHash = {};
    this.idsArr = [];
  }
}

Repo.prototype.insert = function(id) {
  if (this.idsHash[id]) return false;
  this.idsHash[id] = true;
  this.idsArr.push(id);
  return true;
}

Repo.prototype.remove = function(id) {
  if (this.idsHash[id]) {
    delete this.idsHash[id];

    let values = this.idsArr;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === id) {
        values[i] = values[values.length - 1];
        values.pop();
      }
    }
    return true;
  }
  return false;
}

Repo.prototype.getRandom = function() {
  let randIndex = Math.floor(Math.random() * this.idsArr.length);
  return this.idsArr[randIndex];
}

let r1 = new Repo();

r1.insert(200);
r1.insert(930);
r1.insert(1903);
r1.insert(33);

console.log(r1.getRandom()); 
