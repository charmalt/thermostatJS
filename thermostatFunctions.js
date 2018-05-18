$(document).ready(function(){
  thermostat = new Thermostat();
  var temperature = thermostat.temperature;

  $(".up").click(function(){
    $(".errormessages").text('Everything is working fine!');
    try {
      thermostat.up();
    }
    catch (error) {
      $(".errormessages").text('Maximum Temperature Reached!');
    }
    var temperature = thermostat.temperature;
    $(".temperature").text(temperature);
  });

  $(".down").click(function(){
    $(".errormessages").text('Everything is working fine!');
    try {
      thermostat.down();
    }
    catch (error) {
      $(".errormessages").text('Minimum Temperature Reached!');
    }
    var temperature = thermostat.temperature;
    $(".temperature").text(temperature);
  });

  $(".reset").click(function(){
    $(".errormessages").text('Everything is working fine!');
    thermostat.reset();
    var temperature = thermostat.temperature;
  $(".temperature").text(temperature);
  });

  $(".switch").click(function(){
    thermostat.powerSavingOff();
    thermostat.reset();
    var temperature = thermostat.temperature;
  $(".temperature").text(temperature);
  });

  $(".temperature").text(temperature);

  $("#sw").prop('checked', true);
});
