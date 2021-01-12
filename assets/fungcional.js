const createBusObj = (driver, passenger, route, pay) => {
  let bus = {
    driver,
    passenger,
    route,
    pay,
  };
  return bus;
};

let Tayo = createBusObj("Geralt", [], ["Rivia, Lyria"], []);

const passengerIn = (passengerName, arrPassenger, bill, arrBill) => {
  if (arrPassenger.length === 0) {
    arrPassenger.push(passengerName);
    arrBill.push(bill);
    alert(
      `Welcome ${passengerName} to this bus, you already paid ${bill} Gulden`
    );
    return arrPassenger;
  } else {
    for (let n = 0; n < arrPassenger.length; n++) {
      if (arrPassenger[n] === null) {
        arrPassenger[n] = passengerName;
        alert(`Empty seat occupied by ${passengerName}`);
        return arrPassenger;
      } else if (arrPassenger.length === 5) {
        alert("Choose another bus");
        return arrPassenger;
      } else if (arrPassenger[n] === passengerName) {
        alert(`${passengerName} already in the bus`);
        return arrPassenger;
      } else if (n === arrPassenger.length - 1) {
        arrPassenger.push(passengerName);
        arrBill.push(bill);
        alert(`${passengerName} just got on the bus and paid ${bill} Gulden`);
        return arrPassenger;
      }
    }
  }
};

const passengerOut = (passengerName, arrPassenger) => {
  if (arrPassenger.length === 0) {
    alert("Bus still empty!!");
    return false;
  }
  for (let i = 0; i < arrPassenger.length; i++) {
    if (arrPassenger[i] === passengerName) {
      arrPassenger[i] = null;
      alert(`${passengerName} just got off the bus`);
      return arrPassenger;
    }
  }
};
