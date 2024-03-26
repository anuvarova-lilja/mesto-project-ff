const cardTemplate = document.querySelector("#card-template").content;
export const cardContainer = document.querySelector(".places__list");

export function createCard(link, name, deleteCard, likeCard, handleImageClick) {
  const cardElem = cardTemplate.querySelector(".places__item").cloneNode(true);

  const cardImage = cardElem.querySelector(".card__image");
  cardImage.src = link;
  cardElem.querySelector(".card__title").textContent = name;
  cardImage.alt = name;

  cardImage.addEventListener("click", handleImageClick);

  cardElem.querySelector(".card__like-button").addEventListener("click", likeCard);

  const cardDelBtn = cardElem.querySelector(".card__delete-button");
  cardDelBtn.addEventListener("click", deleteCard);

  return cardElem;
}

export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export function deleteCard(evt) {
  const delBtn = evt.target.closest(".places__item");
  delBtn.remove();
}