import "./index.css";
import { initialCards } from "./scripts/cards.js";

const cardTemplate = document.querySelector("#card-template").content;

const cardContainer = document.querySelector(".places__list");

function createCard(link, name, altText, { deleteCard }) {
  const cardElem = cardTemplate.querySelector(".places__item").cloneNode(true);

  const cardImage = cardElem.querySelector(".card__image");
  cardImage.src = link;
  cardElem.querySelector(".card__title").textContent = name;
  cardImage.alt = altText;

  const cardDelBtn = cardElem.querySelector(".card__delete-button");
  cardDelBtn.addEventListener("click", deleteCard);

  return cardElem;
}

function addCard(item, { deleteCard }) {
  const cardElem = createCard(item.link, item.name, item.altText, {
    deleteCard,
  });
  cardContainer.append(cardElem);
}

function deleteCard(evt) {
  const delBtn = evt.target.closest(".places__item");
  delBtn.remove();
}

initialCards.forEach(function (item) {
  addCard(item, { deleteCard });
});

const editButton = document.querySelector('.profile__edit-button');
const editWindow = document.querySelector('.popup_type_edit');

editButton.addEventListener('click', openPopup);
editWindow.addEventListener('click', closePopup);

function openPopup() {
    editWindow.classList.add('popup_is-opened');
};

function closePopup() {
    // const target = evt.target;
    // if (target === editWindow) {
        // 
    editWindow.classList.add('popup__close');
};