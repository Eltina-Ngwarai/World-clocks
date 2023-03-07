function updateTime() {
  let hamburgElement = document.querySelector("#hamburg");
  if (hamburgElement) {
    let hamburgDateElement = hamburgElement.querySelector(".date");
    let hamburgTimeElement = hamburgElement.querySelector(".time");
    let hamburgTime = moment().tz("Europe/Berlin");
    hamburgDateElement.innerHTML = hamburgTime.format("MMMM  Do YYYY");
    hamburgTimeElement.innerHTML = hamburgTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM  Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
  let harareElement = document.querySelector("#harare");
  if (harareElement) {
    let harareDateElement = harareElement.querySelector(".date");
    let harareTimeElement = harareElement.querySelector(".time");
    let harareTime = moment().tz("Africa/Harare");
    harareDateElement.innerHTML = harareTime.format("MMMM  Do YYYY");
    harareTimeElement.innerHTML = harareTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
