class Item {
  constructor(id, name, cost) {
    var _id = id;
    var _name = name;
    var _cost = cost;

    this.getName = () => _name;
    this.setName = (name) => _name = name;

    this.getId = () => _id;
    this.setId = (id) => _id = id;

    this.getCost = () => _cost;
    this.setCost = (cost) => _cost = cost;
  }
}

module.exports = Item;
