const { DateTime } = require("luxon");

const now = DateTime.now();
console.log(now.toLocaleString());

const dateInput = document.getElementById("date-input");
const today = new Date();

dateInput.placeholder = `${
  today.getMonth() + 1
}-${today.getDay()}-${today.getFullYear()}`;

let time = "";

const picker = datepicker("#date-input", {
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value;
    time = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
  },
});

const calculateButton = document.querySelector(".js-calculate-button");

calculateButton.addEventListener("click", () => {
  let yearOld = now.year - time.year;
  let monthOld = now.month - time.month;

  if (monthOld < 0) {
    monthOld += 12;
    yearOld--;
  }

  document.querySelector(
    ".result-container"
  ).innerHTML = `<p>Your are <strong>${yearOld} years and ${monthOld} </strong> old</p>`;
});
