'use strict';

const inputs = document.querySelectorAll('input');

function clearInput() {
  inputs.forEach(inp => (inp.value = ''));
  alert('Please, value must be greater then ZERO🚩🚩 ');
}

function calculateTemp(event) {
  const celsiusEl = document.getElementById('celsius');
  const fahrenheitEl = document.getElementById('fahrenheit');
  const kelvinEl = document.getElementById('kalvin');
  const currentValue = +event.target.value;
  if (currentValue >= 0) {
    switch (event.target.name) {
      case 'celsius':
        fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
        kelvinEl.value = (currentValue + 273.15).toFixed(2);
        break;

      case 'fahrenheit':
        celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
        kelvinEl.value = ((currentValue - 32) * 1.8 + 273.15).toFixed(2);
        break;
      case 'kalvin':
        celsiusEl.value = (currentValue - 273.15).toFixed(2);
        fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
        break;
    }
  } else {
    clearInput();
  }
}

// Dohvatanje referenci na sva četiri input polja
const meterPerSecEl = document.getElementById('meter');
const kilometerPerHourEl = document.getElementById('kilometer');
const milePerHourEl = document.getElementById('mile');
const nauticMilePerHourEl = document.getElementById('nauticMile');

function calculateSpeed(event) {
  const currentValue = +event.target.value;
  if (currentValue >= 0) {
    switch (event.target.id) {
      case 'meter':
        kilometerPerHourEl.value = (currentValue * 3.6).toFixed(2);
        milePerHourEl.value = (currentValue * 2.23).toFixed(2);
        nauticMilePerHourEl.value = (currentValue * 1.94).toFixed(2);
        break;
      case 'kilometer':
        meterPerSecEl.value = (currentValue / 3.6).toFixed(2);
        milePerHourEl.value = (currentValue / 1.609).toFixed(2);
        nauticMilePerHourEl.value = (currentValue * 0.539).toFixed(2);
        break;
      case 'mile':
        meterPerSecEl.value = (currentValue * 0.447).toFixed(2);
        kilometerPerHourEl.value = (currentValue * 1.609).toFixed(2);
        nauticMilePerHourEl.value = (currentValue * 0.868).toFixed(2);
        break;
      case 'nauticMile':
        meterPerSecEl.value = (currentValue * 0.514).toFixed(2);
        kilometerPerHourEl.value = (currentValue * 1.852).toFixed(2);
        milePerHourEl.value = (currentValue * 1.1508).toFixed(2);
        break;
    }
  } else {
    clearInput();
  }
}

function calculateWeight(event) {
  const gramEl = document.getElementById('gram');
  const kilogramEl = document.getElementById('kilogram');
  const funtaEl = document.getElementById('funta');
  const tonEl = document.getElementById('ton');
  const unzaEl = document.getElementById('unza');

  const currentValue = +event.target.value;
  if (currentValue >= 0) {
    switch (event.target.id) {
      case 'gram':
        kilogramEl.value = (currentValue * 0.001).toFixed(3);
        funtaEl.value = (currentValue * 0.0022).toFixed(3);
        tonEl.value = (currentValue * 0.000001).toFixed(3);
        unzaEl.value = (currentValue * 0.0352).toFixed(3);
        break;
      case 'kilogram':
        gramEl.value = (currentValue * 1000).toFixed(3);
        funtaEl.value = (currentValue * 2.204).toFixed(3);
        tonEl.value = (currentValue * 0.001).toFixed(3);
        unzaEl.value = (currentValue * 35.273).toFixed(3);
        break;
      case 'funta':
        gramEl.value = (currentValue * 453.592).toFixed(3);
        kilogramEl.value = (currentValue * 0.453).toFixed(3);
        tonEl.value = (currentValue * 0.000453).toFixed(3);
        unzaEl.value = (currentValue * 16).toFixed(3);
        break;
      case 'ton':
        gramEl.value = (currentValue * 1.0).toFixed(3);
        kilogramEl.value = (currentValue * 1000).toFixed(3);
        funtaEl.value = (currentValue * 2204.622).toFixed(3);
        unzaEl.value = (currentValue * 35273.96).toFixed(3);
        break;
      case 'unza':
        gramEl.value = (currentValue * 28.349).toFixed(3);
        kilogramEl.value = (currentValue * 0.0283).toFixed(3);
        funtaEl.value = (currentValue * 0.0625).toFixed(3);
        tonEl.value = (currentValue * 0.0000283).toFixed(3);
        break;
    }
  } else {
    clearInput();
  }
}

function calculatePower(event) {
  const watEl = document.getElementById('wat');
  const kilowatEl = document.getElementById('kilowat');
  const horsePowerEl = document.getElementById('horsePower');

  const currentValue = +event.target.value;
  if (currentValue >= 0) {
    switch (event.target.name) {
      case 'wat':
        kilowatEl.value = (currentValue * 0.001).toFixed(3);
        horsePowerEl.value = (currentValue * 0.00134).toFixed(3);
        break;

      case 'kilowat':
        watEl.value = (currentValue * 1000).toFixed(3);
        horsePowerEl.value = (currentValue * 1.341).toFixed(3);
        break;
      case 'horsePower':
        watEl.value = (currentValue * 745.7).toFixed(3);
        kilowatEl.value = (currentValue * 0.754).toFixed(3);
        break;
    }
  } else {
    clearInput();
  }
}
