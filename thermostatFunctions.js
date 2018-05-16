$(document).ready(function(){
  thermostat = new Thermostat();
  var temperature = thermostat.temperature;

  $(".up").click(function(){
    thermostat.up();
    var temperature = thermostat.temperature;
  $(".temperature").text(temperature);
  });

  $(".temperature").text(temperature);
});
