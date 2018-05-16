var DEFAULTTEMP = 20;
var INCREASE = 1;
var DECREASE = 1;

function Thermostat() {
    this.temperature = DEFAULTTEMP;
}

Thermostat.prototype.up = function() {
  this.temperature += INCREASE;
}

Thermostat.prototype.down = function() {
  this.temperature -= DECREASE;
}
