$(document).ready(function(){
  thermostat = new Thermostat();
  var temperature = thermostat.temperature;

  $('#city-form').submit(function(){
    event.preventDefault();
    var cityName = $('#city').val();
    $("#city-name").text(cityName);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&APPID=06d5aa42080a1c3d436218f627f29502', function (response){
      $("#city-temperature").html(response.main.temp + '&#8451;');
    });

  });

  $(".up").click(function(){
    $(".errormessages").text('Jack is safe.');
    $("#GIF").attr('class', '');
    try {
      thermostat.up();
    }
    catch (error) {
      $(".errormessages").text('It\'s getting hot in here.');
      $("#GIF").attr('class', 'GIF-hot');
    }
    var temperature = thermostat.temperature;
    $(".temperature").text(temperature);
  });

  $(".down").click(function(){
    $(".errormessages").text('Jack is safe.');
    $("#GIF").attr('class', '');
    try {
      thermostat.down();
    }
    catch (error) {
      $(".errormessages").text('Jack is frozen.');
      $("#GIF").attr('class', 'GIF-frozen');
    }
    var temperature = thermostat.temperature;
    $(".temperature").text(temperature);
  });

  $(".reset").click(function(){
    $(".errormessages").text('Jack is safe.');
    $("#GIF").attr('class', '');
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
