class Warehouse {
  constructor(accountBalance=0) {
    var _inventory = {};
    var _accountBalance = accountBalance;

    this.getBalance = () => 'accountBalance $' + _accountBalance;

    this.addToBalance = (amount) => {
      return `accountBalance $${_accountBalance += amount}`;
    }

    this.subtractFromBalance = (amount) => {
      return `accountBalance $${_accountBalance -= amount}`;
    }

    this.addToInventory = (id) => {
      if (!_inventory[id]) _inventory[id] = 1;
      else _inventory[id] += 1;
      return _inventory;
    }

    this.getAllInventory = () => _inventory;

    this.removeFromInventory = (id) => {
      delete _inventory[id];
      return _inventory;
    }

    this.shipOrder = (id, cost) => {
      if (_inventory[id]) {
        if (_inventory[id] === 1) {
          delete _inventory[id];
        } else {
          _inventory[id] -= 1;
        }
        this.addToBalance(cost);
      } else {
        return 'no inventory available';
      }
      return 'accountBalance $' + _accountBalance;
    }
  }
}

module.exports = Warehouse;
