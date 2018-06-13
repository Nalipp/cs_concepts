let sortNameByAge = (obj) => {
  let list = createList(obj);
  let results = [];

  for (let name of list) {

    if (name) {
      results.push(name);
    }
  }

  return results;
}


let createList = (obj) => {
  let list = [];

  for (let key in obj) {
    let val = obj[key];

    list[val] = key;
  }

  return list;
}

let obj = {
  Emily: 22, 
  Tad: 19,
  Melonie: 42,
  Jamie: 34,
}

console.log(createList(obj)); 
console.log(sortNameByAge(obj)); 
