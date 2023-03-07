function updateTime() {
    let hamburgElement = document.querySelector("#hamburg");
  if (hamburgElement) {
    let hamburgDateElement = hamburgElement.querySelector(".date");
    let hamburgTimeElement = hamburgElement.querySelector(".time");
    let hamburgTime = moment().tz("Europe/Berlin");

    hamburgDateElement.innerHTML = hamburgTime.format("MMMM	Do YYYY");
    hamburgTimeElement.innerHTML = hamburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  
    }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM  Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }}
//   let sydneyElement = document.querySelector("#sydney");
//   if (sydneyElement) {
//     let sydneyDateElement = sydneyElement.querySelector(".date");
//     let sydneyTimeElement = sydneyElement.querySelector(".time");
//     let sydneyTime = moment().tz("Australia/Sydney");
//     sydneyDateElement.innerHTML = sydneyTime.format("MMMM  Do YYYY");
//     sydneyTimeElement.innerHTML = sydneyTime.format(
//       "H:mm:ss [<small>]A[</small>]"
//     );
//   }
//   let harareElement = document.querySelector("#harare");
//   if (harareElement) {
//     let harareDateElement = harareElement.querySelector(".date");
//     let harareTimeElement = harareElement.querySelector(".time");
//     let harareTime = moment().tz("Africa/Harare");
//     harareDateElement.innerHTML = harareTime.format("MMMM  Do YYYY");
//     harareTimeElement.innerHTML = harareTime.format(
//       "H:mm:ss [<small>]A[</small>]"
//     );
//   }

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);
