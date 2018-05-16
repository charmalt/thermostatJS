var DEFAULTTEMP = 20;
var INCREASE = 1;
var DECREASE = 1;
var MINIMUM = 10;
var MAXIMUM_PS = 25;
var MAXIMUM = 32;

function Thermostat() {
    this.temperature = DEFAULTTEMP;
    this.powerSaving = true;
}

Thermostat.prototype.up = function() {
  if (this._isMaxTemp()) {
    throw new Error("Maximum Temperature!");
  };
  this.temperature += INCREASE;
}

Thermostat.prototype.down = function() {
  if (this.temperature <= MINIMUM) {
    throw new Error("Minimum Temperature!");
  };
  this.temperature -= DECREASE;
}

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
}

Thermostat.prototype._isMaxTemp = function(){
  return (this.powerSaving === true && this.temperature >= MAXIMUM_PS) ||
  (this.temperature >= MAXIMUM);
}
