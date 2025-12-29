function showSelectedLocation() {
  let cityTimezones = document.querySelectorAll(".each-city-timezone");
  let cityDates = document.querySelectorAll(".each-city-date");
  let cityTimes = document.querySelectorAll(".each-city-time");
  let numCities = cityTimezones.length;

  for (let i = 0; i < numCities; i++) {
    if (cityTimezones[i].innerHTML === "") {
      let currentCityDate = moment().format(`MMMM Do YYYY`);
      cityDates[i].innerHTML = currentCityDate;

      let currentCityTime = moment().format(`h:mm:ss A`);
      cityTimes[i].innerHTML = currentCityTime;
    } else {
      let currentCityDate = moment()
        .tz(cityTimezones[i].innerHTML)
        .format(`MMMM Do YYYY`);
      cityDates[i].innerHTML = currentCityDate;

      let currentCityTime = moment()
        .tz(cityTimezones[i].innerHTML)
        .format(`h:mm:ss A`);
      cityTimes[i].innerHTML = currentCityTime;
    }
  }
}

function showCity() {
  let selectedCity = document.querySelector("#cities");
  let selectedCityTimezone = selectedCity.value;
  let selectedCityTime = moment().tz(selectedCityTimezone).format(`h:mm:ss A`);
  let selectedCityDate = moment()
    .tz(selectedCityTimezone)
    .format(`MMMM Do YYYY`);

  let selectedCityName = selectedCityTimezone.split("/")[1];
  let cityList = document.querySelector("#clock-worlds");
  cityList.innerHTML += `<div class="each-city" id="each-city">
          <div class="each-city-remove-button"><button>-</button></div>
          <div>
            <div class="each-city-name">${selectedCityName}</div>
            <div class="each-city-timezone">${selectedCityTimezone}</div>
            <div class="each-city-date" id="each-city-date">${selectedCityDate}</div>
          </div>
          <div class="each-city-time" id="each-city-time">${selectedCityTime}</div>
        </div>`;
}
function handleSelectedCity(event) {
  let selectedCity = document.querySelector("#cities");
  let selectedCityTimezone = selectedCity.value;
  console.log(selectedCityTimezone);
  let arrayWorldClockCities = document.querySelectorAll(".each-city-timezone");
  console.log(arrayWorldClockCities);
  let dummyVariable = false;
  for (let index = 0; index < arrayWorldClockCities.length; index++) {
    if (selectedCityTimezone === arrayWorldClockCities[index].innerHTML) {
      dummyVariable = true;
    }
  }
  if (dummyVariable === false) {
    showCity();
  }
}
let firstCityTimeZone = document.querySelector("#first-city-time-zone");
firstCityTimeZone.innerHTML = moment.tz.guess();
showSelectedLocation();
setInterval(showSelectedLocation, 1000);

let optionalCities = document.querySelector("#cities");
optionalCities.addEventListener("change", handleSelectedCity);
