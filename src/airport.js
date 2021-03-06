function Airport(capacity = 1) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.land = function(plane) {
  if (this.isStormy() === true) {
    throw new Error("Can't land due to stormy weather");
  }
  if (this.planes.includes(plane)) {
    throw new Error("Plane already landed");
  }
  if (this.planes.length >= this.capacity) {
    throw new Error("The airport is at full capacity");
  }
  this.planes.push(plane);
};

Airport.prototype.depart = function(plane) {
  if (this.isStormy()) {
    throw new Error("Plane can't depart due to stormy weather");
  }
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

Airport.prototype.isStormy = function() {
  var weather = new Weather();
  if (weather.currentWeather == 'stormy') {
    return true;
  } else {
    return false;
  }
};
