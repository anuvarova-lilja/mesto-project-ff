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

// открытие и закрытие попапов

const editButton = document.querySelector('.profile__edit-button');
const editWindow = document.querySelector('.popup_type_edit');

const addButton = document.querySelector('.profile__add-button');
const newCard = document.querySelector('.popup_type_new-card');

const popupClose = document.querySelector('.popup__close');

const cardImage = document.querySelector('.card__image');
const viewImage = document.querySelector('.popup_type_image');


function openPopup(modal) {
  modal.classList.add('popup_is-opened');
  window.addEventListener('keydown', closePopup)
};

function closePopup(modal) {
  modal.classList.remove('popup_is-opened');
  window.removeEventListener('keydown', closePopup);
};

editButton.addEventListener('click', () => {openPopup(editWindow)});
addButton.addEventListener('click', () => {openPopup(newCard)});
cardImage.addEventListener('click', () => {openPopup(viewImage)});

popupClose.addEventListener('click', () => {closePopup(editWindow)});

// popupClose.addEventListener('click', () => {closePopup(newCard)});
// popupClose.addEventListener('click', () => {closePopup(viewImage)});


// function closePopup(evt) {
//   if (evt.target === editWindow || evt.target.closest('.popup__close') || evt.code === 'Escape') {
//   editWindow.classList.remove('popup_is-opened');
//   };
//   window.removeEventListener('keydown', closePopup);
// };


// editButton.addEventListener('click', openPopup);
// addButton.addEventListener('click', openPopup);


// function openPopup(popupElement) {
//   editWindow.classList.add('popup_is-opened');
//   
// };



// newCard.addEventListener('click', closePopup);

// function closePopup(evt) {
//   if (evt.target === newCard || evt.target.closest('.popup__close') || evt.code === 'Escape') {
//     newCard.classList.remove('popup_is-opened');
//   };
//   window.removeEventListener('keydown', closePopup);
// };

// function openPopup() {
//   newCard.classList.add('popup_is-opened');
//     window.addEventListener('keydown', closePopup )
// };

//

// cardImage.addEventListener('click', openPopup);
// viewImage.addEventListener('click', closePopup);

// const cardImage = document.querySelector('.card__image');
// const viewImage = document.querySelector('.popup_type_image');

// function closePopup(evt) {
//   if (evt.target === viewImage || evt.target.closest('.popup__close') || evt.code === 'Escape') {
//     viewImage.classList.remove('popup_is-opened');
//   };
//   window.removeEventListener('keydown', closePopup);
// };

// function openPopup() {
//   viewImage.classList.add('popup_is-opened');
//     window.addEventListener('keydown', closePopup )
// };