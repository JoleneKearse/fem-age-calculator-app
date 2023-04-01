const handleSubmit = (e) => {
  e.preventDefault();
  console.log("clicked");
};

document.getElementById("form").addEventListener("submit", handleSubmit);