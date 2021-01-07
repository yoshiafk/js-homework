class Bus {
  constructor(driver, passenger, route, pay) {
    this.driver = driver;
    this.passenger = passenger;
    this.route = route;
    this.pay = pay;
    //Function for let the passenger in
    this.passengerIn = function (passengerName) {
      if (this.passenger.length === 0) {
        this.passenger.push(passengerName);
        alert(`Welcome to the bus ${passengerName}!`);
        return this.passenger;
      } else {
        for (let n = 0; n < passenger.length; n++) {
          // Chech if there's an empy seat, and put new passenger in empty seat
          if (this.passenger[n] === null) {
            this.passenger[n] = passengerName;
            alert(`Empty seat occupied by ${passengerName}`);
            return this.passenger;
            // Condition if the bus is full
          } else if (passenger.length === 5) {
            alert(
              `Choose another bus, bus already full by ${passenger.length} passenger`
            );
            return this.passenger;
            // Check if the passenger already in the bus
          } else if (this.passenger[n] == passengerName) {
            alert(`${passengerName} already in the bus`);
            return this.passenger;
            // Let the new passenger seat in empy seat behind
          } else if (n === this.passenger.length - 1) {
            this.passenger.push(passengerName);
            alert(`${passengerName} got into the bus`);
            return this.passenger;
          }
        }
      }
    };
    this.passengerOut = function (passengerName, bill) {
      // Check if there's no passenger in the bus
      if (this.passenger.length === 0) {
        alert("Bus still empty!");
        return false;
      }
      for (let i = 0; i < passenger.length; i++)
        // Passenger get off the buss and must pay!!
        if (this.passenger[i] === passengerName) {
          this.passenger[i] = null;
          this.pay += bill;
          alert(`${passengerName} just got off the bus and paid ${bill}`);
          return this.passenger;
        }
    };
  }
}

let bus1 = new Bus("Argon", [], ["New Jersey", "Oregon"], 0);
