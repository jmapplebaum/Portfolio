function updateTime() {
  let honoluluElement = document.querySelector("#Honolulu");
  let honoluluDate = honoluluElement.querySelector(".date");
  let honoluluTime = honoluluElement.querySelector(".time");
  let honoluluFormat = moment().tz("Pacific/Honolulu");

  honoluluDate.innerHTML = honoluluFormat.format("MMMM Do YYYY");
  honoluluTime.innerHTML = honoluluFormat.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let devnerElement = document.querySelector("#Denver");
  let denverDate = devnerElement.querySelector(".date");
  let denverTime = devnerElement.querySelector(".time");
  let denverFormat = moment().tz("America/Denver");

  denverDate.innerHTML = denverFormat.format("MMMM Do YYYY");
  denverTime.innerHTML = denverFormat.format("h:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#New-York");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");
  let newYorkFormat = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYorkFormat.format("MMMM Do YYYY");
  newYorkTime.innerHTML = newYorkFormat.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
//
function addCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-container");
  citiesElement.innerHTML = `<div class="cities" id="new-city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        
        <br />
        <a href="/"> Reset cities
      </a>`;
}

let citiesSelect = document.querySelector("#cities-select");
citiesSelect.addEventListener("change", addCity);
