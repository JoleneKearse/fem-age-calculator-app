const day = document.getElementById("day");
const dayLabel = document.getElementById("dayLabel");
const dayWarningMsg = document.getElementById("dayWarningMsg");
const month = document.getElementById("month");
const mthLabel = document.getElementById("mthLabel");
const mthWarningMsg = document.getElementById("mthWarningMsg");
const year = document.getElementById("year");
const yearLabel = document.getElementById("yearLabel");
const yearWarningMsg = document.getElementById("yearWarningMsg");
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
    calculateStats();
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
  }
  if (
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
  }
  // check if leap year
  if (day.value >= 29 && month.value == 2) {
    checkLeapYear();
  }
  // check month input
  if (month.value == "" || month.value < 1 || month.value > 12) {
    handleMonthErrors();
  }
  // check year input
  if (year.value == "" || year.value > currentYear) {
    handleYearErrors();
  }
};

document.getElementById("form").addEventListener("submit", handleSubmit);
