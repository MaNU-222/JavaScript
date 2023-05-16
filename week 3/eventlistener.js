const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);





//this help us to use the keyboard
const log = document.querySelector("#log");
//const log = document.getElementById(log);
document.addEventListener("keydown", logKey);

function logKey(e) {
  console.log(e);
}
