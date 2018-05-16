var DEFAULTTEMP = 20;
var INCREASE = 1;
var DECREASE = 1;

describe("Thermostat", function() {

beforeEach(function () {
  thermostat = new Thermostat();
});

it("should start at 20 degrees", function() {
  expect(thermostat.temperature).toEqual(DEFAULTTEMP);
});

describe("up", function() {
  it("should increase the temperature by specified amount", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(DEFAULTTEMP + INCREASE);
  });

  describe("power saving on", function(){
    it("should raise error if above maximum temperature (25)", function(){
      for(i=1; i<=5; i++){ thermostat.up(); };
      expect(function(){
        thermostat.up();
      }).toThrowError('Maximum Temperature!');
    });
  });

  describe("power saving off", function(){
    it("should raise error if above maximum temperature (32)", function(){
      thermostat.powerSavingOff();
      for (i=1; i<=12; i++){ thermostat.up(); };
      expect(function(){
        thermostat.up();
      }).toThrowError('Maximum Temperature!');
    });
  });

});

describe("down", function() {
  it("should decrease the temperature by specified amount", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(DEFAULTTEMP - DECREASE);
  });
  it("should raise error if below minimum temperature", function(){
    for(i=1; i<=10; i++){ thermostat.down(); };
    expect(function(){
      thermostat.down();
    }).toThrowError("Minimum Temperature!");
  });
});

describe("power saving mode", function(){
  it("should be on by default", function(){
    expect(thermostat.powerSaving).toEqual(true);
  });
  it("can be turned off", function(){
    thermostat.powerSavingOff();
    expect(thermostat.powerSaving).toEqual(false);
  });
});

describe("reset", function(){
  it("should reset the temperature to default (20)", function(){
    thermostat.reset();
    expect(thermostat.temperature).toEqual(DEFAULTTEMP);
  });
});

describe("energy usage", function(){
  it("should return the current energy usage", function(){
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });
  it("should return low-usage if temp less than 18", function(){
    for(i=1; i<=3; i++){ thermostat.down(); };
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });
  it("should return high-usage if temp is greater than 25", function(){
    thermostat.powerSavingOff();
    for(i=1; i<=6; i++){ thermostat.up(); };
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });
});

});
