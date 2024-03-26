import { initialCards } from "./scripts/cards";

import "./index.css";
import {
  createCard,
  likeCard,
  deleteCard,
  cardContainer,
} from "./components/card";
import { closePopup, openPopup } from "./components/modal";

const viewImage = document.querySelector(".popup_type_image");
const popupImage = viewImage.querySelector(".popup__image");
const popupCaption = viewImage.querySelector(".popup__caption");

const editButton = document.querySelector(".profile__edit-button");
const editWindow = document.querySelector(".popup_type_edit");

const addButton = document.querySelector(".profile__add-button");
const newCard = document.querySelector(".popup_type_new-card");

const profileForm = document.querySelector(".popup__form");

const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");

const shownName = document.querySelector(".profile__title");
const shownJob = document.querySelector(".profile__description");

const handleNewCardFormSubmit = document.querySelector(".popup_type_new-card .popup__form");

const placeNameInput = handleNewCardFormSubmit.querySelector(".popup__input_type_card-name");
const placeUrlInput = handleNewCardFormSubmit.querySelector(".popup__input_type_url");

const popups = document.querySelectorAll(".popup");

initialCards.forEach(function (item) {
  addCard(item, deleteCard);
});

editButton.addEventListener("click", () => {
  nameInput.value = shownName.textContent;
  jobInput.value = shownJob.textContent;
  openPopup(editWindow);
});

addButton.addEventListener("click", () => {
  openPopup(newCard);
});

function handleImageClick(item) {
  (popupImage.src = item.link),
  (popupImage.alt = item.name),
  (popupCaption.textContent = item.name);
  openPopup(viewImage)
}

function addCard(item) {
  const cardElem = createCard(item.link, item.name, deleteCard, likeCard, () => handleImageClick(item));
  cardContainer.append(cardElem);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const newName = nameInput.value;
  const newJob = jobInput.value;

  shownName.textContent = newName;
  shownJob.textContent = newJob;

  closePopup(editWindow);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

handleNewCardFormSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  const placeName = placeNameInput.value;
  const placeLink = placeUrlInput.value;

  const newCardForm = createCard(placeLink, placeName, deleteCard, likeCard);

  cardContainer.prepend(newCardForm);

  handleNewCardFormSubmit.reset();
  
  closePopup(newCard);
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_is-opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});