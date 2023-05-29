function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;

  if (isNaN(temperature)) {
    document.getElementById("result").innerHTML = "Please enter a valid temperature.";
    return;
  }

  var convertedTemperature;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      convertedTemperature = temperature * 9 / 5 + 32;
    } else if (toUnit === "kelvin") {
      convertedTemperature = temperature + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      convertedTemperature = (temperature - 32) * 5 / 9;
    } else if (toUnit === "kelvin") {
      convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      convertedTemperature = temperature - 273.15;
    } else if (toUnit === "fahrenheit") {
      convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
    } else {
      convertedTemperature = temperature;
    }
  }

  document.getElementById("result").innerHTML = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + toUnit;
}