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
});

describe("down", function() {
  it("should decrease the temperature by specified amount", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(DEFAULTTEMP - DECREASE);
  });
});


});
