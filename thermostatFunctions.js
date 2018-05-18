$(document).ready(function(){
  thermostat = new Thermostat();
  var temperature = thermostat.temperature;

  var weatherResponse = $.get('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=06d5aa42080a1c3d436218f627f29502', function (response){
      console.log(response.main.temp);
    });

  // console.log(weatherResponse);
  console.log(weatherResponse.responseJSON.main.temp);


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
