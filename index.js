const day = document.getElementById("day");
const dayLabel = document.getElementById("dayLabel");
const dayWarningMsg = document.getElementById("dayWarningMsg");
const dayDisplay = document.getElementById("days");

const month = document.getElementById("month");
const mthLabel = document.getElementById("mthLabel");
const mthWarningMsg = document.getElementById("mthWarningMsg");
const mthDisplay = document.getElementById("months");

const year = document.getElementById("year");
const yearLabel = document.getElementById("yearLabel");
const yearWarningMsg = document.getElementById("yearWarningMsg");
const yearDisplay = document.getElementById("years");

// get current year to validate form
const date = new Date();
const currentYear = date.getFullYear();

// FUNCTIONS
// add text & classes
const handleDayErrors = () => {
  dayLabel.classList.add("warning");
  dayWarningMsg.classList.add("warning");
  dayWarningMsg.classList.add("warning-msg");
  if (day.value == "") {
    dayWarningMsg.innerText = "This field is required";
  } else {
    dayWarningMsg.innerText = "Must be a valid day";
  }
};

const handleMonthErrors = () => {
  mthLabel.classList.add("warning");
  mthWarningMsg.classList.add("warning");
  mthWarningMsg.classList.add("warning-msg");
  if (month.value == "") {
    mthWarningMsg.innerText = "This field is required";
  } else if (month.value < 1 || month.value > 12) {
    mthWarningMsg.innerText = "Must be a valid month";
  }
};

const handleYearErrors = () => {
  yearLabel.classList.add("warning");
  yearWarningMsg.classList.add("warning");
  yearWarningMsg.classList.add("warning-msg");
  if (year.value == "") {
    yearWarningMsg.innerText = "This field is required";
  } else if (year.value > currentYear) {
    yearWarningMsg.innerText = "Must be in the past";
  }
};

const checkLeapYear = () => {
  const yearToCheck = year.value;
  if (
    (0 == yearToCheck % 4 && 0 != yearToCheck % 100) ||
    0 == yearToCheck % 400
  ) {
    calculateAndReturnStats();
  } else {
    handleDayErrors();
  }
};

// catch user input errors
const handleSubmit = (e) => {
  e.preventDefault();
  // VALIDATE USER INPUT
  // check day input
  if (day.value == "" || day.value < 1) {
    handleDayErrors();
  } else if (
    (day.value > 31 && month.value == 1) ||
    (day.value > 31 && month.value == 3) ||
    (day.value > 31 && month.value == 5) ||
    (day.value > 31 && month.value == 7) ||
    (day.value > 31 && month.value == 8) ||
    (day.value > 31 && month.value == 10) ||
    (day.value > 31 && month.value == 12) ||
    (day.value > 30 && month.value == 4) ||
    (day.value > 30 && month.value == 6) ||
    (day.value > 30 && month.value == 9) ||
    (day.value > 30 && month.value == 11)
  ) {
    handleDayErrors();
  } else if (day.value >= 29 && month.value == 2) {
    // check if leap year
    checkLeapYear();
  } else if (month.value == "" || month.value < 1 || month.value > 12) {
    // check month input
    handleMonthErrors();
  } else if (year.value == "" || year.value > currentYear) {
    // check year input
    handleYearErrors();
  } else {
    calculateAndReturnStats();
  }
};

// calculate years, months & days
function calculateAndReturnStats() {
  const userEnteredDate = new Date(`${year.value}-${month.value}-${day.value}`);
  // get difference in milliseconds
  let diff = Math.abs(date.getTime() - userEnteredDate.getTime());
  // get years
  const returnYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  diff -= returnYears * (1000 * 60 * 60 * 24 * 365.25);
  // get months
  const returnMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  diff -= returnMonths * (1000 * 60 * 60 * 24 * 30.44);
  // get days
  const returnDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  // display to user if integer
  if (typeof returnYears === "number") {
    yearDisplay.innerText = returnYears;
  } else {
    yearDisplay.innerText = "--";
  }
  if (typeof returnMonths === "number") {
    mthDisplay.innerText = returnMonths;
  } else {
    mthDisplay.innerText = "--";
  }
  if (typeof returnDays === "number") {
    dayDisplay.innerText = returnDays;
  } else {
    dayDisplay.innerText = "--";
  }
}

document.getElementById("form").addEventListener("submit", handleSubmit);
