import { viewImage, popupImage, popupCaption } from "../index";

const cardTemplate = document.querySelector("#card-template").content;
export const cardContainer = document.querySelector(".places__list");

export function createCard(link, name, deleteCard, likeCard, handleImageClick) {
  const cardElem = cardTemplate.querySelector(".places__item").cloneNode(true);

  const cardImage = cardElem.querySelector(".card__image");
  cardImage.src = link;
  cardElem.querySelector(".card__title").textContent = name;
  cardImage.alt = name;

  function handleImageClick() {
    (popupImage.src = link),
    (popupImage.alt = name),
    (popupCaption.textContent = name);
    viewImage.classList.toggle("popup_is-opened");
  }

  cardImage.addEventListener("click", () => {
    handleImageClick(link, name)
  });

  cardElem.querySelector(".card__like-button").addEventListener("click", likeCard);

  const cardDelBtn = cardElem.querySelector(".card__delete-button");
  cardDelBtn.addEventListener("click", deleteCard);

  return cardElem;
}

export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export function addCard(item, deleteCard) {
  const cardElem = createCard(item.link, item.name, deleteCard, likeCard);
  cardContainer.append(cardElem);
}

export function deleteCard(evt) {
  const delBtn = evt.target.closest(".places__item");
  delBtn.remove();
}