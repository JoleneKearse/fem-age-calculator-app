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

const handleSubmit = (e) => {
  e.preventDefault();
  if (day.value == "") {
    dayLabel.classList.add("warning");
    dayWarningMsg.innerText = "This field is required";
    dayWarningMsg.classList.add("warning");
    dayWarningMsg.classList.add("warning-msg");
  }
  if (month.value == "") {
    mthLabel.classList.add("warning");
    mthWarningMsg.innerText = "This field is required";
    mthWarningMsg.classList.add("warning");
    mthWarningMsg.classList.add("warning-msg");
  }
  if (year.value == "") {
    yearLabel.classList.add("warning");
    yearWarningMsg.innerText = "This field is required";
    yearWarningMsg.classList.add("warning");
    yearWarningMsg.classList.add("warning-msg");
  }
  if (month.value < 1 || month.value > 12) {
    mthLabel.classList.add("warning");
    mthWarningMsg.innerText = "Must be a valid month";
    mthWarningMsg.classList.add("warning");
    mthWarningMsg.classList.add("warning-msg");
  }
  if (year.value > currentYear) {
    yearLabel.classList.add("warning");
    yearWarningMsg.innerText = "Must be in the past";
    yearWarningMsg.classList.add("warning");
    yearWarningMsg.classList.add("warning-msg");
  }
};

document.getElementById("form").addEventListener("submit", handleSubmit);
