$(function() { 
    var lat = 24.5557;
    var lon = -81.7826;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?city=Key West, FL&lat=" + lat + "&lon=" + lon + "&appid=b739a7df436b8d5570014cd80f0dae3b", function(data) {

      // Our Data
      var icon = data.weather[0].icon; 
      $(".weather-app_main__information--city").html(data.name);
      var toCels =Math.round(((data.main.temp) - 273.15));
      var toFar = Math.round((data.main.temp)* (9 / 5) - 459.67);
      var description = data.weather[0].description;
      var cDescription = description.charAt(0).toUpperCase() + description.slice(1);
       
      switch (data.weather[0].main) {
          case "Clouds":
            $('.weather-icon').attr("src","/images/weather-icons/cloudy.png");
            break;
          case "Clear":
            $('.weather-icon').attr("src","/images/weather-icons/sunny2.png");
            break;
          case "Thunderstorm":
             $('.weather-icon').attr("src","/images/weather-icons/thunderstorm.png");
            break;
          case "Drizzle":
             $('.weather-icon').attr("src","/images/weather-icons/drizzle.png");
            break;
          case "Rain":
             $('.weather-icon').attr("src","/images/weather-icons/rain.png");
            break;
          case "Snow":
             $('.weather-icon').attr("src","/images/weather-icons/snow.png");
            break;
          case "Extreme":
             $('.weather-icon').attr("src","/images/weather-icons/warning.png");
            break;
        }
      // Apply Data To Page
      //$(".weather-app_main__information--icon").attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217538/" + icon + ".png");
      $(".cel").html(toCels + "");
      $(".fahr").html(toFar + "");

     // console.log('added' + toFar);
    }) 
});