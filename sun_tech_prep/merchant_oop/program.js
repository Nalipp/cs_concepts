const Item = require('./item');
const Warehouse = require('./warehouse');

let i1 = new Item('1abc', 'toothpaste', 4.90);
let i2 = new Item('8ab9', 'soap', 5.64);
let i3 = new Item('3bcd', 'hairbrush', 12.89);

let w1 = new Warehouse(34000);

w1.addToInventory('1abc');
w1.addToInventory('1abc');
w1.addToInventory('8ab9');
w1.addToInventory('3bcd');

console.log(w1.shipOrder('1abc', 2.99));
console.log(w1.getAllInventory());





// class WareHouse {
//   constructor(name) {
//     this._name = name;
//     this.inventory = {}
//   }
//   inStock(id) {
//   }
//   addStock(item) {
//   }
// }

// class Merchant {
//   constructor(cash) {
//     this._cash = cash;
//     this._inventory = {};
//   }
//   buy(id) {
//   }
// }

// class ItemList {
//   constructor() {
//     this._allItems = allItems = {};
//   }
//   addItem(Item) {
//     if (ItemName 
//   }
//   getList() {
//     return this._allItems
//   }
// }

// class Item {
//   constructor(id, name, cost) {
//     this._id = id;
//     this._name = name;
//     this._cost = cost;
//   }
//   getItemName() {
//     return this._name;
//   }
//   getItemId() {
//     return this._id;
//   }
//   getItemCost() {
//     return this._cost;
//   }
//   setItemName(name) {
//     this._name = name;
//     return this._name;
//   }
//   setItemId(id) {
//     this._id = id;
//     return this._id;
//   }
//   setItemCost(cost) {
//     this._cost = cost;
//     return this._cost;
//   }
// }

// let m1 = new Merchant(100);
// let m2 = new Merchant(834);
// let m3 = new Merchant(1290);

// console.log(m1); 




