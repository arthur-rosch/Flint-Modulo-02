const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button"),
  inputName = document.querySelector("#name"),
  inputAddress = document.querySelector("#address");

inputName.value = window.localStorage.getItem("nameTextValue");
inputAddress.value = window.localStorage.getItem("addressTextValue");

button.addEventListener("click", (e) => {
  console.log("Preparando Envio...");
});

inputName.addEventListener("keyup", (e) => {
  window.sessionStorage.setItem("nameValue", e.target.value);
  window.localStorage.setItem("nameValue", e.target.value);
});

inputAddress.addEventListener("keyup", (e) => {
  window.sessionStorage.setItem("addressValue", e.target.value);
  window.localStorage.setItem("addressValue", e.target.value);
});
