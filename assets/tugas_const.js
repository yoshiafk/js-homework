function Bus(driver, passenger, route, pay) {
  this.driver = driver;
  this.passenger = passenger;
  this.route = route;
  this.pay = pay;
  this.passengerIn = function (passengerName) {
    this.passenger.push(passengerName);
    alert(`Welcome to the bus ${passengerName}!`);
    return this.passenger;
  };
  this.passengerOut = function (passengerName, bill) {
    for (let n = 0; n < passenger.lenght; passenger++) {
      if (this.passenger[n] === passengerName) {
        this.passenger[n] = null;
        this.pay += bill;
        alert(`${passengerName} just got off the bus and paid ${bill}`);
        return this.passenger;
      }
    }
  };
}

let bus1 = new Bus("Argon", [], ["New Jersey", "Oregon"], 0);
