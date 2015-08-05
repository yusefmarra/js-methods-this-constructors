function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function() {
  return this.passengers.length;
};

Taxi.prototype.full = function() {
  if (this.maxNumberOfPassengers <= this.passengerCount()) {
    return true;
  } else {
    return false;
  }
};

Taxi.prototype.dropOffPassengers = function() {
  this.passengers = [];
  return this.passengers;
}
// your code here

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
