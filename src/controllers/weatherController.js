exports.weather = function(req, res) {
  let weather = 
  {
    "Temp":90.5,
    "Unit": "fahrenheit",
    "Cloudy":false,
    "PrecipitationChance":0
  }
  res.send(weather);
}