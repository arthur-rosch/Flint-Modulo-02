let select = document.querySelector("#productsByLine");
const productsGrid = document.querySelector(".products");

function attSelect() {
  const options = select.options[select.selectedIndex];
  const value = options.value;
  return value;
}

select.addEventListener("click", (e) => {
  e.preventDefault();
  if (attSelect() === "twoProducts") {
    productsGrid.style.gridTemplateColumns = "300px 300px";
  }
  if (attSelect() === "treeProducts") {
    productsGrid.style.gridTemplateColumns = "300px 300px 300px";
  }
  if (attSelect() === "fiveProducts") {
    productsGrid.style.gridTemplateColumns = "300px 300px 300px 300px 300px";
  }
});
