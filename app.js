let button = document.querySelector(".amigos");
let reqerror = document.querySelectorAll(".reqEroorp");
function validateNumberInput(inputElement) {
  const hasNonNumeric = /\D/.test(inputElement.value);
  if (hasNonNumeric) {
    inputElement.classList.add("reqEroorp");
    reqerror.forEach(function (element) {
      element.innerHTML = "This field is required"

    });
  } else {
    inputElement.classList.remove("reqEroorp");
  }
} 
button.addEventListener("click", function (event) {
  event.preventDefault();
  let yearInput = document.querySelector(".input-class-year");
  let monthInput = document.querySelector(".input-class-month");
  let dayInput = document.querySelector(".input-class-day");
  validateNumberInput(yearInput);
  validateNumberInput(monthInput);
  validateNumberInput(dayInput);
  
  let currentDarte = new Date();

  let yearsRuselt = document.querySelector(".years-ruselt");
  let monthsRuselt = document.querySelector(".months-ruselt");
  let daysRuselt = document.querySelector(".days-ruselt");

  let currentYear = currentDarte.getFullYear();
  let currentMonth = currentDarte.getMonth() + 1;
  let currentDay = currentDarte.getDate();
   
  calcDays = currentDay - dayInput.value;

  
  
  calcYears = currentYear - yearInput.value;
  
  
  if (currentMonth < monthInput.value) {
    var rrrrrr = currentMonth + 12 - monthInput.value;
    calcYears -= 1;
  } else {
    var rrrrrr = currentMonth - monthInput.value;
  };
  calcMonths = rrrrrr;
  
  if (calcDays < 0) {
    calcMonths -= 1;
    const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    calcDays += daysInPreviousMonth;
  }
  

  yearsRuselt.innerHTML = calcYears + " " + "years";
  monthsRuselt.innerHTML = calcMonths + " " + "months";
  daysRuselt.innerHTML = calcDays + " " + "days";
});