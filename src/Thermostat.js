var DEFAULTTEMP = 20;
var INCREASE = 1;
var DECREASE = 1;
var MINIMUM = 10;
var MAXIMUM = 25;

function Thermostat() {
    this.temperature = DEFAULTTEMP;
    this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  if (this.temperature >= MAXIMUM) {
    throw new Error("Maximum Temperature!")
  };
  this.temperature += INCREASE;
}

Thermostat.prototype.down = function() {
  if (this.temperature <= MINIMUM) {
    throw new Error("Minimum Temperature!");
  };
  this.temperature -= DECREASE;
}
