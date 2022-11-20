const display = document.querySelector("#Display");
const grid = document.querySelector("#Grid");
const form = document.querySelector("form");

display.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.flexDirection = "column";
});

grid.addEventListener("click", (e) => {
  e.preventDefault();

  form.style.display = "grid";
  form.style.gridTemplateColumns = "15.625rem 15.625rem 15.625rem";
  form.style.gridTemplateRows = "3rem 3rem 3rem";
  form.style.alignContent = "end";
  form.style.gap = "1.563rem;";
});
