let updateWidget = function(data) {

  console.log("Got weather data: ", data)

    let currentCity = $("#weather h4")
    currentCity.html(data.name)

    let currentTemperature = $("#weather p")
    currentTemperature.html("It is " + Math.round(data.main.temp) + " degrees outside")

    let replaceImage = $("#weather img")
    $(replaceImage).attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon +".png")
  }

  let myLocation = function() {
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(getWeather);
  }

  $("#get_forecast").on("click", myLocation);

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

let getWeather = function(info) {
  let latitude = info.coords.latitude
  let longitude = info.coords.longitude
  let apiKey = '967cbe6464f2f4b9b185313932fba4f2';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
