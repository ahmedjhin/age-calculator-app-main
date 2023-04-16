let button = document.querySelector(".amigos");
let dayerr = document.querySelector(".reqEroorp1");
let montherr = document.querySelector(".reqEroorp2");
let yearerr = document.querySelector(".reqEroorp3");

let dayslabel = document.querySelector(".label-class1");
let monthslabel = document.querySelector(".label-class2");
let yearslabel = document.querySelector(".label-class3");

function validateNumberInput(inputElement , errmasege,label) {
  const hasNonNumeric = /\D/.test(inputElement.value);
  if (hasNonNumeric ) {
    inputElement.classList.add("reqEroor");
    errmasege.innerHTML =  "this is not a number";
    label.classList.add("reqEroorp2");
  } else {
    inputElement.classList.remove("reqEroorp");
    errmasege.innerHTML =  ""; 
    label.classList.remove("reqEroorp2");
    inputElement.classList.remove("reqEroor");
  }
  if (inputElement.value === "") {
    errmasege.innerHTML = "this field is required";
    label.classList.add("reqEroorp2");
    inputElement.classList.add("reqEroor");
  }
} 
button.addEventListener("click", function (event) {
  event.preventDefault();
  let yearInput = document.querySelector(".input-class-year");
  let monthInput = document.querySelector(".input-class-month");
  let dayInput = document.querySelector(".input-class-day");
  validateNumberInput(yearInput ,yearerr , yearslabel );
  validateNumberInput(monthInput, montherr , monthslabel );
  validateNumberInput(dayInput , dayerr , dayslabel);
  
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