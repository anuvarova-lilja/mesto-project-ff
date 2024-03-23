import "./index.css";
import {
  createCard,
  cardLike,
  deleteCard,
  cardContainer,
} from "./components/card";
import { closePopup, openPopup } from "./components/modal";

const editButton = document.querySelector(".profile__edit-button");
const editWindow = document.querySelector(".popup_type_edit");

const addButton = document.querySelector(".profile__add-button");
const newCard = document.querySelector(".popup_type_new-card");

editButton.addEventListener("click", () => {
  nameInput.value = shownName.textContent;
  jobInput.value = shownJob.textContent;
  openPopup(editWindow);
});
addButton.addEventListener("click", () => {
  openPopup(newCard);
});

const formElement = document.querySelector(".popup__form");

const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

const shownName = document.querySelector(".profile__title");
const shownJob = document.querySelector(".profile__description");

function handleFormSubmit(evt) {
  evt.preventDefault();

  const newName = nameInput.value;
  const newJob = jobInput.value;

  shownName.textContent = newName;
  shownJob.textContent = newJob;

  closePopup(editWindow);
}

formElement.addEventListener("submit", handleFormSubmit);

const newPlaceForm = document.querySelector(".popup_type_new-card .popup__form");

newPlaceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const placeName = newPlaceForm.querySelector(".popup__input_type_card-name").value;
  const placeLink = newPlaceForm.querySelector(".popup__input_type_url").value;

  const newCardForm = createCard(placeLink, placeName, deleteCard, cardLike);

  cardContainer.prepend(newCardForm);

  newPlaceForm.reset();
  
  closePopup(newCard);
});