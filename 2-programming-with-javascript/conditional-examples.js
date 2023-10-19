/* ☀️ Weather App 🌧

    Clothing Advice:
        -If the weather is "sunny", tell the user to "Wear shorts and a t-shirt.".
        -If the weather is "cold", tell the user to "Wear a coat."
        -If the weather is "rainy", tell the user to "Wear a rain jacket."
        -If the weather is "in-between", tell the user to "Wear a sweater."

    Tornado Warning:
        -If there is a tornado warning in effect, tell the user "🚨Tornado Warning!🚨 "
        -Otherwise, tell the user "The weather is normal."

    Seven-Day Forecast
          - If the app receives a forecast for day 1, display the day as "Monday."
            For day 2, display "Tuesday" — etc., all the way up to day 7 ("Sunday").
          - If it receives a forecast for day 8 or higher, register that the
            "maximum number of forecasts has been reached."
*/

var tornadoWarning = false;
var weather = "rainy";
var day = 5;

var advice = "";

switch (weather) {
  case "sunny":
    advice = "Wear shorts and a t-shirt.";
    break;
  case "cold":
    advice = "Wear a coat.";
    break;
  case "rainy":
    advice = "Wear a rain jacket.";
    break;
  case "in-between":
    advice = "Wear a sweater.";
    break;
  default:
    advice = "No advice!";
    break;
}

var tornadoAdvice = "The weather is normal.";
if (tornadoWarning) {
  tornadoAdvice = "🚨Tornado Warning!🚨 ";
}

var dayText = ""
switch (day) {
  case 1:
    dayText = "Monday";
    break;
  case 2:
    dayText = "Tuesday";
    break;
  case 3:
    dayText = "Wednesday";
    break;
  case 4:
    dayText = "Thursday";
    break;
  case 5:
    dayText = "Friday";
    break;
  case 6:
    dayText = "Saturday";
    break;
  case 7:
    dayText = "Sunday";
    break;
  default:
    dayText = "maximum number of forecasts has been reached.";
}

if (day < 8) {
  console.log("--- " + dayText + " ---")
  console.log(advice);
  console.log(tornadoAdvice)
} else {
  console.log("--- " + dayText + " ---")
}


