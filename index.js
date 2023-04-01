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

const handleSubmit = (e) => {
  e.preventDefault();
  // check for errors
  // check for empty values
  if (day.value == "") {
    dayLabel.classList.add("warning");
    dayWarningMsg.innerText = "This field is required";
    dayWarningMsg.classList.add("warning");
    dayWarningMsg.classList.add("warning-msg");
  }
  if (month.value == "") {
    handleMonthErrors();
  }
  if (year.value == "") {
    handleYearErrors();
  }
  // check if day not in month
  // check if day under 0
  if (day.value < 1) {
    dayLabel.classList.add("warning");
    dayWarningMsg.innerText = "Must be a valid day";
    dayWarningMsg.classList.add("warning");
    dayWarningMsg.classList.add("warning-msg");
  }
  if (day.value > 31 && month.value == 1) {
    dayLabel.classList.add("warning");
    dayWarningMsg.innerText = "Must be a valid day";
    dayWarningMsg.classList.add("warning");
    dayWarningMsg.classList.add("warning-msg");
  }
  // check if not valid month
  if (month.value < 1 || month.value > 12) {
    handleMonthErrors();
  }
  // check if year in the future
  if (year.value > currentYear) {
    handleYearErrors();
  }
};

document.getElementById("form").addEventListener("submit", handleSubmit);
