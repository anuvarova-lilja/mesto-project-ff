import { initialCards } from "../scripts/cards";

const cardTemplate = document.querySelector("#card-template").content;
export const cardContainer = document.querySelector(".places__list");

export function createCard(link, name, deleteCard, cardLike) {
    const cardElem = cardTemplate.querySelector(".places__item").cloneNode(true);
  
    const cardImage = cardElem.querySelector(".card__image");
    cardImage.src = link;
    cardElem.querySelector(".card__title").textContent = name;
    cardImage.alt = name;
  
    const viewImage = document.querySelector(".popup_type_image");
    const popupImage = viewImage.querySelector(".popup__image");
    const popupCaption = viewImage.querySelector(".popup__caption");
  
    cardImage.addEventListener("click", () => {
      (popupImage.src = link), (popupCaption.textContent = name);
      viewImage.classList.toggle("popup_is-opened");
    });
  
    cardElem.querySelector(".card__like-button").addEventListener("click", cardLike);
  
    const cardDelBtn = cardElem.querySelector(".card__delete-button");
    cardDelBtn.addEventListener("click", deleteCard);
  
    return cardElem;
  }

  export function cardLike(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
  
  export function addCard(item, deleteCard) {
    const cardElem = createCard(item.link, item.name, deleteCard, cardLike);
    cardContainer.append(cardElem);
  }
  
  export function deleteCard(evt) {
    const delBtn = evt.target.closest(".places__item");
    delBtn.remove();
  }
  
  initialCards.forEach(function (item) {
    addCard(item, deleteCard);
  });