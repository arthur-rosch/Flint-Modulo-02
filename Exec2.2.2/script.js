const ButtonsStar = document.querySelectorAll("img");
const ButtonsRating = document.querySelectorAll(".RatingButton");

for (const iterator of ButtonsRating) {
  iterator.addEventListener("click", (e) => {
    e.preventDefault();
    iterator.style.backgroundColor = "yellow";
  });
}

ButtonsStar[2].addEventListener("click", (e) => {
  e.preventDefault();
  ButtonsStar[1].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[2].src = "./imagens/icons8-christmas-star-48.png";
});

ButtonsStar[3].addEventListener("click", (e) => {
  e.preventDefault();
  ButtonsStar[1].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[2].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[3].src = "./imagens/icons8-christmas-star-48.png";
});

ButtonsStar[4].addEventListener("click", (e) => {
  e.preventDefault();
  ButtonsStar[1].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[2].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[3].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[4].src = "./imagens/icons8-christmas-star-48.png";
});

ButtonsStar[5].addEventListener("click", (e) => {
  e.preventDefault();
  ButtonsStar[1].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[2].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[3].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[4].src = "./imagens/icons8-christmas-star-48.png";
  ButtonsStar[5].src = "./imagens/icons8-christmas-star-48.png";
});
